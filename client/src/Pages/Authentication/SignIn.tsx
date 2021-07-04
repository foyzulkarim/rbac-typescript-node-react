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

const SignIn: FC = () => {
    return (
        <Form {...layout} name="nest-messages">
            <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={["user", "password"]}
                label="Password"
                rules={[
                    {
                        type: "string",
                    },
                ]}
            >
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

export default SignIn;
