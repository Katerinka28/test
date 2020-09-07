/*
  eslint-disable
    import/prefer-default-export
*/
export const dict = _ => ({
  alpha: _('This field may only contain alphabetic characters'),
  alpha_num: _('This field may only contain alpha-numeric characters'),
  alpha_dash: _('This  field may contain alpha-numeric characters as well as dashes and underscores'),
  alpha_spaces: _('This field may only contain alphabetic characters as well as spaces'),
  between: _('This field must be between {min} and {max}'),
  confirmed: _('This field confirmation does not match'),
  digits: _('This field must be numeric and exactly contain {length} digits'),
  dimensions: _('This field must be {width} pixels by {height} pixels'),
  email: _('Enter valid e-mail'),
  decimal: _('Enter the correct number'),
  excluded: _('This field is not a valid value'),
  ext: _('This field is not a valid file'),
  image: _('This field must be an image'),
  integer: _('This field must be an integer'),
  length: _('This field must be {length} long'),
  min: _('Enter at least {length} characters'),
  min_value: _('Value can not be low then {min}'),
  max: _('Value is too large'),
  phone: _('Enter valid phone'),
  mimes: _('This field must have a valid file type'),
  numeric: _('This field may only contain numeric characters'),
  oneOf: _('This field is not a valid value'),
  regex: _('This field format is invalid'),
  required_if: _('This field is required'),
  required: _('This field is required'),
  size: _('This field size must be less than {size}KB'),
})
