import sys

from pydub import AudioSegment
from PIL import Image, ImageDraw
sys.path.append('/usr/bin/ffmpeg')

class Waveform(object):

    bar_count = 300
    db_ceiling = 60

    def __init__(self, filename):
        self.filename = filename

        audio_file = AudioSegment.from_file(
            self.filename, self.filename.split('.')[-1])

        self.peaks = self._calculate_peaks(audio_file)

    def _calculate_peaks(self, audio_file):
        """ Returns a list of audio level peaks """
        chunk_length = len(audio_file) / self.bar_count
        print(chunk_length, 'chunk')

        loudness_of_chunks = [
            audio_file[i * chunk_length: (i + 1) * chunk_length].rms
            for i in range(self.bar_count)]
        print(loudness_of_chunks)
        max_rms = max(loudness_of_chunks) * 1.00

        return [int((loudness / max_rms) * self.db_ceiling)
                for loudness in loudness_of_chunks]

    def _get_bar_image(self, size, fill):
        """ Returns an image of a bar. """
        width, height = size
        bar = Image.new('RGBA', size, fill)

        end = Image.new('RGBA', (width, 2), fill)
        draw = ImageDraw.Draw(end)
        draw.point([(0, 0), (3, 0)], fill='#c1c1c1')
        draw.point([(0, 1), (3, 1), (1, 0), (2, 0)], fill='#F5907B')

        bar.paste(end, (0, 0))
        bar.paste(end.rotate(180), (0, height - 2))
        return bar

    def _generate_waveform_image(self):
        """ Returns the full waveform image """
        im = Image.new('RGB', (900, 128), '#f5f5f5')
        for index, value in enumerate(self.peaks, start=0):
            column = index * 3 - 0
            upper_endpoint = 64 - value
            print(column, upper_endpoint)
            im.paste(self._get_bar_image((2, value * 2), '#F5907B'),
                     (column, upper_endpoint))

        return im

    def save(self):
        """ Save the waveform as an image """
        png_filename = self.filename.replace(
            self.filename.split('.')[-1], 'png')
        with open(png_filename, 'wb') as imfile:
            self._generate_waveform_image().save(imfile, 'PNG')


if __name__ == '__main__':
    filename = sys.argv[1]

    waveform = Waveform(filename)
    waveform.save()


#source 
# https://github.com/adaptlearning/adapt_authoring/wiki/Installing-FFmpeg
# pipenv install pydub
# https://gist.github.com/mixxorz/abb8a2f22adbdb6d387f