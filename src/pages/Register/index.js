import { Button, Card, Form, Input, notification } from "antd";
export default function Register() {
  const handleFinish = values => {
    notification.success({ message: "This message only make sure the register handler work!" });
    console.log(values);
  };
  return (
    <Card style={{ maxWidth: 400, margin: "40px auto" }}>
      <Form onFinish={handleFinish}>
        <Form.Item
          label="Username"
          name="username"
          labelCol={{ span: 24 }}
          rules={[{ required: true, message: "Username is required!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Full Name"
          name="fullName"
          labelCol={{ span: 24 }}
          rules={[{ required: true, message: "Full name is required!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          labelCol={{ span: 24 }}
          rules={[{ required: true, message: "Password is required!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Button htmlType="submit">Register</Button>
      </Form>
    </Card>
  );
}
