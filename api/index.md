# Aibot GraphQL API 草案

## 概述

本草案用于设计智能机器人相关的 API，包括认证 / 查询 / 命令等各种操作。

## 设计原则

- 所有API应当是基于 GraphQL 的
- 所有API应当是简单的
- 所有API应当是安全的
- 所有API应当是易于维护的
- 所有API应当是便于文档化的

## 认证

-  所有API应当是基于Token的认证
-  除公共 endpoint, 所有请求统一使用请求头 `Authorization: Bearer <token>` 进行认证

## 功能

### 状态查询

首先，我们需要一个接口，用于获取机器人状态，包括类似当前是否可以正常工作,
当前的 Uptime, 当前的版本, 模型当 Token 消耗量等。