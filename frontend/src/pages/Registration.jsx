import { Button, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logedUser } from "../slices/userInfoSlice";

const Registration = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let userData = useSelector((stade) => stade.logedUser.value);

  console.log("userData From Redux",userData);

  const onFinish = async (values) => {
    console.log("Success:", values);

    let data = await axios.post(
      "http://localhost:8000/api/v1/auth/registration",
      {
        email: values.email,
        username: values.username,
        password: values.password,
      },
      {
        headers: {
          Authorization: "kasdfukwejfh90w32749687496",
        },
      }
    );
    setTimeout(() => {
      navigate("/otp");
      dispatch(logedUser(values));
    }, 1000);

  
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Registration;
