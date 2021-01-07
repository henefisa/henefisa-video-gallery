import { Input } from "antd";
import { useHistory } from "react-router-dom";

export default function Search({ placeholder, path }) {
  const history = useHistory();

  const handleSearch = values => {
    history.push(`${path}?q=${values}`);
  };

  return <Input.Search placeholder={placeholder} onSearch={handleSearch} />;
}
