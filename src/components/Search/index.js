import { Input } from "antd";

export default function Search({ placeholder, handleSearch }) {
  return <Input.Search placeholder={placeholder} onSearch={handleSearch} />;
}
