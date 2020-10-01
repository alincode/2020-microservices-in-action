### 軟體架構的選擇因素

1. 業務需求
1. 成本
1. 技術架構
1. 組織架構
1. 可擴展性
1. 可維護性

https://kknews.cc/zh-tw/news/rl9o9on.html
https://www.redhat.com/zh/topics/cloud-native-apps/stateful-vs-stateless

- [.Net 微服務輕旅行 30 天 : 2018 iT 邦幫忙鐵人賽](https://ithelp.ithome.com.tw/users/20107867/ironman/1585)
- [微服務架構下常見的四個技術難題](https://medium.com/brobridge/%E5%BE%AE%E6%9C%8D%E5%8B%99%E6%9E%B6%E6%A7%8B%E4%B8%8B%E5%B8%B8%E8%A6%8B%E7%9A%84%E5%9B%9B%E5%80%8B%E6%8A%80%E8%A1%93%E9%9B%A3%E9%A1%8C-7e2112d0f0d)
- [微服務架構中的通訊](https://docs.microsoft.com/zh-tw/dotnet/architecture/microservices/architect-microservice-container-applications/communication-in-microservice-architecture)
- [微服務中的服務間通訊](https://docs.microsoft.com/zh-tw/azure/architecture/microservices/design/interservice-communication)
- [34.微服務之間的通訊](https://www.itread01.com/content/1547875626.html)

在決定微服務間連接方法前，我們需要搞清楚兩個概念：

- 架構風格（Architectural Style）
- 傳輸協議（Transport Protocol）

### 架構風格

在使用服務時如何形成有效負載？是有狀態還是無狀態？我們應該採用 REST、SOAP、JSON、XML，還是其他消息格式？

### 傳輸協議

我們應該用哪種傳輸協議？應該採用 HTTP、HTTP2、消息總線、TCP socket，還是 UDP？

### 時下流行的通信方法

一些主流的選項如下：

- REST over HTTP(S)
- 通過 Message Broker 進行消息傳遞
- RPC (跨語言或單語言)

- [服務開發雜談: 第 12 屆 iT 邦幫忙鐵人賽](https://ithelp.ithome.com.tw/users/20104930/ironman/3456)
- [微服務系統建置與監控 : 第 12 屆 iT 邦幫忙鐵人賽](https://ithelp.ithome.com.tw/users/20129762/ironman/3259)
- [.Net 微服務輕旅行 30 天 : 2018 iT 邦幫忙鐵人賽](https://ithelp.ithome.com.tw/users/20107867/ironman/1585?page=1)

- [Node Microservices: From Zero to Hero](https://developer.okta.com/blog/2020/02/05/node-microservices-zero-to-hero)
- [微服務設計的十個步驟](https://www.ithome.com.tw/voice/134648)

Seneca

單一應用系統（Monolithic Application）
