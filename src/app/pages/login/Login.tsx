import { Button } from "antd";
import React from "react";
import InputForm from "../../containers/InputForm";
import useInput from "../../utils/useInput";

//用于验证邮箱的正则表达式

const EMAIL_REG = /\S+@\S+\.\S+/;

export default function Login() {
  const email = useInput({
    initValue: "",
    helperText: "请输入有效的邮箱 ！",
    validator: (value: any) => EMAIL_REG.test(value),
    validateTriggers: ["onBlur"],
  });

  const password = useInput({
    initValue: "",
    helperText: "密码长度需要在6~20之间",
    validator: (value: any) => value.length >= 6 && value.length <= 20,
    validateTriggers: ["onChange", "onBlur"],
  });

  //判断是否禁用按钮

  function isButtonDisabled() {
    // 当邮箱货密码为填写时，或者邮箱或密码输入校验位通过时，禁用按钮
    return !email.value || !password.value || email.error || password.error;
  }

  //处理表单提交

  function handleButtonClick() {
    console.log("邮箱", email.value);
    console.log("密码", password.value);
  }

  return (
    <div>
      <InputForm {...email} label="邮箱" type="email" />
      <InputForm {...password} label="密码" type="password" />
      <Button
        type="primary"
        disabled={isButtonDisabled()}
        onClick={handleButtonClick}
      >
        登录
      </Button>
    </div>
  );
}
