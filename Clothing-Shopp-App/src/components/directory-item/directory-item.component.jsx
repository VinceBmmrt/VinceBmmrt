import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryyItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer
      onClick={onNavigateHandler}
      //  to={`/shop/${title}`}
    >
      <BackgroundImage imageUrl={imageUrl} />

      <Body>
        <h2>{title}</h2>
        <div>Shop Now</div>
      </Body>
    </DirectoryItemContainer>
  );
};
export default DirectoryyItem;
