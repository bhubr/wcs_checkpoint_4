import PropTypes from 'prop-types'

export default PropTypes.shape({
  project_id: PropTypes.number,
  title: PropTypes.string,
  src: PropTypes.string,
  company_name: PropTypes.string,
  create_date: PropTypes.string,
  description: PropTypes.string
})
