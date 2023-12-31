import PropTypes from 'prop-types';
import { StyledContact } from './Contact.styled';

const Contact = ({ contactItemData, onDeleteContact }) => {
  return (
    <StyledContact>
      <p>
       👤&nbsp;&nbsp;{contactItemData.name}: <span>{contactItemData.number}</span>
      </p>
      <button type="button" onClick={() => onDeleteContact(contactItemData.id)}>
        ✕
      </button>
    </StyledContact>
  );
};

Contact.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contactItemData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
