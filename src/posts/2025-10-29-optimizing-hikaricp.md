---
title: Optimizing HikariCP for High-Throughput Services
date: 2025-10-29
---

This post outlines practical tips for tuning HikariCP connection pools in Spring Boot applications serving high throughput workloads.

- Use small acquireRetries and reasonable connectionTimeout
- Monitor connection usage with metrics
- Tune maximumPoolSize according to DB capacity

```java
HikariConfig config = new HikariConfig();
config.setMaximumPoolSize(50);
```

More details to come...
