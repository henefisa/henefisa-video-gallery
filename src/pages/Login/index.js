import { Card } from "antd";
import LoginComponent from "../../components/Login";
export default function Login() {
  return (
    <Card style={{ maxWidth: 400, margin: "40px auto" }}>
      <LoginComponent />
    </Card>
  );
}
