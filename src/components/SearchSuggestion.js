import styled from "styled-components";
import BodyText from "./BodyText";
import HeaderText from "./HeaderText";
import IconButton from "./IconButton";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const SuggestionPlaceIcon = styled(IconButton)`
  width: 24px;
  background-color: #e2e4e4;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  color: #6e7679;
`;

const InfoWrapper = styled.div`
  margin-left: 16px;
  white-space: nowrap;
  overflow: hidden;
`;

const SuggestionPlaceName = styled(HeaderText)`
  font-size: 16px;
  margin-bottom: 4px;
`;

const SuggestionPlaceAddress = styled(BodyText)`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SearchSuggestion = ({ name, address }) => {
  return (
    <Wrapper>
      <SuggestionPlaceIcon icon="place" size={16} />
      <InfoWrapper>
        <SuggestionPlaceName>{name}</SuggestionPlaceName>
        <SuggestionPlaceAddress>{address}</SuggestionPlaceAddress>
      </InfoWrapper>
    </Wrapper>
  );
};

export default SearchSuggestion;
