import { Button, Form, Input, notification } from "antd";

export default function Login() {
  const handleFinish = values => {
    notification.success({ message: "This message only make sure the login handler work" });
    console.log(values);
  };

  return (
    <Form onFinish={handleFinish}>
      <Form.Item
        name="username"
        label="Username"
        labelCol={{ span: 24 }}
        rules={[{ required: true, message: "Username is required!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        labelCol={{ span: 24 }}
        rules={[{ required: true, message: "Password is required!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Button htmlType="submit">Log in</Button>
    </Form>
  );
}
