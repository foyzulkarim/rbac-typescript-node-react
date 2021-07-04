import { FC } from "react";
import { Form, Input, Button } from "antd";

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 10,
    },
};

const SignUp: FC = () => {
    return (
        <Form {...layout} name="nest-messages">
            <Form.Item
                name={["user", "name"]}
                label="Name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[
                    {
                        type: "string",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={["user", "phone"]}
                label="Contact Number"
                rules={[
                    {
                        type: "string",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item name={["user", "password"]} label="Password">
                <Input.Password />
            </Form.Item>
            <Form.Item name={["user", "password"]} label="Confirm Password">
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SignUp;
