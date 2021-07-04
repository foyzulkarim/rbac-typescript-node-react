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

const TransactionAdd: FC = () => {
    return (
        <Form {...layout} name="nest-messages">
            <Form.Item
                name={["user", "transaction-name"]}
                label="Transaction Name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={["user", "sku"]}
                label="SKU"
                rules={[
                    {
                        type: "string",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={["user", "unit-price"]}
                label="Unit Price"
                rules={[
                    {
                        type: "number",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item name={["user", "tags"]} label="Tags">
                <Input />
            </Form.Item>
            <Form.Item name={["user", "description"]} label="Description">
                <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default TransactionAdd;
