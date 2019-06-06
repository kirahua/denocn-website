import React, { FunctionComponent } from "react";
import logo from "../../assets/imgs/logo.svg";
import "./index.less";
import { Link } from "react-router-dom";

const Header: FunctionComponent = () => {
  return (
    <header>
      <div className="inner">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>DENO中文社区</span>
        </div>

        <nav>
          <Link to="/">首页</Link>
          <Link to="/getting-start">新手入门</Link>
          <a href="https://deno.land/" target="_blank">
            官网
          </a>
          <Link to="/about">关于</Link>
          <a href="/api/user/login">登录</a>
          <a href="/api/user/logout">退出</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
