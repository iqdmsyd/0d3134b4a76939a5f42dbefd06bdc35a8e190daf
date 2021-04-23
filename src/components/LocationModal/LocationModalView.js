import styled from "styled-components";
import Button from "../Button";
import HeaderText from "../HeaderText";
import IconButton from "../IconButton";
import SearchSuggestion from "../SearchSuggestion";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: ${(props) => (props.open ? "translateY(0)" : "translateY(100%)")};
  transition: transform 0.3s ease-in-out;

  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;

  display: ${(props) => (props.open ? "block" : "none")};
  transition: display 0.3s linear;
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 80%;
  width: 100%;
  padding: 8px 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  flex-flow: column nowrap;
  background-color: white;

  > * + * {
    margin-top: 32px;
  }
`;

const CloseButton = styled(Button)`
  align-self: flex-end;
`;

const SearchInput = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
  padding-left: 30px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 14px;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
`;

const IconInside = styled(IconButton)`
  position: absolute;
  left: 0;
  top: 0;
  color: red;
  padding: 0 4px;
`;

const SuggestionWrapper = styled.div`
  > * + * {
    margin-top: 32px;
  }
`;

const LocationModalView = (props) => {
  const { open, handleCloseModal } = props;
  const { value, handleChange, handleSubmit } = props;

  return (
    <>
      <Overlay open={open} />
      <Container open={open}>
        <Wrapper>
          <CloseButton noGutter onClick={handleCloseModal}>
            <IconButton icon="close" />
          </CloseButton>
          <HeaderText size={20}>
            Cek makanan yang tersedia di lokasi kamu!
          </HeaderText>
          <form onSubmit={handleSubmit}>
            <InputWrapper>
              <IconInside icon="location_on" />
              <SearchInput
                type="text"
                id="search-location"
                name="location"
                placeholder="ex: Tokopedia Tower"
                value={value}
                onChange={handleChange}
              />
            </InputWrapper>
          </form>

          {/* could be better */}
          {value.length > 3 && (
            <SuggestionWrapper>
              <SearchSuggestion
                name="Tokopedia Tower"
                address="Jln. Subanagara RT/RW 003/008, Kelurahan Purbaratu, Kecamatan Purbaratu"
              />
              <SearchSuggestion
                name="Tokopedia Tower"
                address="Jln. Subanagara RT/RW 003/008, Kelurahan Purbaratu, Kecamatan Purbaratu"
              />
              <SearchSuggestion
                name="Tokopedia Tower"
                address="Jln. Subanagara RT/RW 003/008, Kelurahan Purbaratu, Kecamatan Purbaratu"
              />
            </SuggestionWrapper>
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default LocationModalView;
