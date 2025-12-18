const springBootQuiz = [
  {
    question: "What is Spring Boot?",
    options: [
      "Framework to simplify Spring development",
      "Web server",
      "ORM tool",
      "Build tool"
    ], answer: 0,explanation: "Spring Boot is a framework built on top of Spring that simplifies application development by providing auto-configuration, embedded servers, and opinionated defaults. It helps developers focus on business logic instead of boilerplate configuration."
  },
  {
    question: "How does Spring Boot differ from Spring Framework?",
    options: [
      "No XML needed",
      "Provides auto-configuration",
      "Embedded servers",
      "All of the above"
    ], answer: 3,explanation: "Spring Framework requires extensive manual configuration, whereas Spring Boot provides auto-configuration, embedded servers, and reduces XML usage, making applications faster to develop and deploy."
  },
  {
    question: "What are the main advantages of Spring Boot?",
    options: [
      "Auto-configuration",
      "Standalone applications",
      "Production-ready features",
      "All of the above"
    ], answer: 3,explanation: "Spring Boot offers auto-configuration, embedded servers for standalone execution, and production-ready features like health checks and metrics, making it ideal for modern applications."
  },
  {
    question: "What does @SpringBootApplication include internally?",
    options: [
      "@Configuration",
      "@EnableAutoConfiguration",
      "@ComponentScan",
      "All of the above"
    ], answer: 3,explanation: "@SpringBootApplication is a convenience annotation that combines @Configuration, @EnableAutoConfiguration, and @ComponentScan, simplifying application setup."
  },
  {
    question: "Which annotation is used to define a Spring Bean?",
    options: [
      "@Component",
      "@Bean",
      "@Service",
      "All of the above"
    ], answer: 3,explanation: "Spring beans can be defined using @Component, @Service, @Repository, or @Bean. All register objects into the Spring application context."
  },
  {
    question: "Difference between @Component and @Service?",
    options: [
      "No difference",
      "@Service is for business logic",
      "@Component is deprecated",
      "@Service is faster"
    ], answer: 1,explanation: "@Service is a specialization of @Component used to indicate service-layer business logic, improving code readability and design clarity."
  },
  {
    question: "What is @Repository used for?",
    options: [
      "Service layer",
      "Controller layer",
      "DAO layer",
      "Configuration"
    ], answer: 2,explanation: "@Repository is used in the persistence layer and provides automatic translation of database exceptions into Spring’s DataAccessException."
  },
  {
    question: "Difference between @Controller and @RestController?",
    options: [
      "@RestController returns JSON",
      "@Controller returns views",
      "@RestController = @Controller + @ResponseBody",
      "All of the above"
    ], answer: 3,explanation: "@RestController is used for REST APIs and automatically returns JSON/XML responses, whereas @Controller is typically used for MVC applications returning views."
  },
  {
    question: "What is Dependency Injection in Spring Boot?",
    options: [
      "Creating objects manually",
      "Injecting dependencies automatically",
      "Database injection",
      "API injection"
    ], answer: 1,explanation: "Dependency Injection allows Spring to automatically provide required objects to a class at runtime, promoting loose coupling and easier testing."
  },
  {
    question: "Which annotation is commonly used for dependency injection?",
    options: [
      "@Autowired",
      "@Inject",
      "@Resource",
      "All of the above"
    ], answer: 3,explanation: "Spring supports @Autowired (Spring), @Inject (JSR-330), and @Resource (JSR-250) for dependency injection."
  },
  {
    question: "What are Spring Boot Starters?",
    options: [
      "Predefined dependencies",
      "Build tools",
      "Servers",
      "Plugins"
    ], answer: 0,explanation: "Spring Boot Starters are predefined dependency descriptors that simplify dependency management by bundling commonly used libraries."
  },
  {
    question: "Which starter is used for building REST APIs?",
    options: [
      "spring-boot-starter-data-jpa",
      "spring-boot-starter-web",
      "spring-boot-starter-test",
      "spring-boot-starter-security"
    ], answer: 1,explanation: "spring-boot-starter-web provides Spring MVC, embedded Tomcat, and REST support required to build web applications."
  },
  {
    question: "Difference between application.properties and application.yml?",
    options: [
      "Same functionality",
      "YAML is hierarchical",
      "Properties is flat",
      "All of the above"
    ], answer: 3,explanation: "Both are used for configuration. YAML supports hierarchical and readable structure, while properties use flat key-value pairs."
  },
  {
    question: "How do you run a Spring Boot application?",
    options: [
      "Using main() method",
      "Using mvn spring-boot:run",
      "Using java -jar",
      "All of the above"
    ], answer: 3,explanation: "Spring Boot applications can be run using an IDE, Maven command, or as a standalone JAR file."
  },
  {
    question: "What is the default embedded server in Spring Boot?",
    options: [
      "Jetty",
      "Tomcat",
      "Undertow",
      "JBoss"
    ], answer: 1,explanation: "Spring Boot uses Tomcat as the default embedded server, allowing applications to run without external server deployment."
  },
  {
    question: "What is embedded Tomcat?",
    options: [
      "External server",
      "Server inside JDK",
      "Server bundled with app",
      "Cloud server"
    ], answer: 2,explanation: "Embedded Tomcat runs inside the Spring Boot application, making it self-contained and easier to deploy."
  },
  {
    question: "What are bean scopes in Spring Boot?",
    options: [
      "singleton",
      "prototype",
      "request",
      "All of the above"
    ], answer: 3,explanation: "Spring supports multiple bean scopes like singleton, prototype, request, session, and application depending on the use case."
  },
  {
    question: "What is the default bean scope in Spring Boot?",
    options: [
      "prototype",
      "request",
      "session",
      "singleton"
    ], answer: 3,explanation: "Singleton is the default scope, meaning only one instance of the bean exists per application context."
  },
  {
    question: "Difference between singleton and prototype scope?",
    options: [
      "One instance vs multiple instances",
      "Memory usage",
      "Lifecycle difference",
      "All of the above"
    ], answer: 3,explanation: "Singleton creates one shared instance, while prototype creates a new instance each time the bean is requested."
  },
  {
    question: "What is lazy initialization?",
    options: [
      "Bean created at startup",
      "Bean created when needed",
      "Delayed server start",
      "Slow injection"
    ], answer: 1,explanation: "Lazy initialization delays bean creation until it is actually required, improving startup time."
  },
  {
    question: "Which annotation enables lazy initialization?",
    options: [
      "@Lazy",
      "@Delay",
      "@Async",
      "@Load"
    ], answer: 0,explanation: "@Lazy tells Spring to initialize the bean only when it is requested for the first time."
  },
  {
    question: "Difference between @Autowired and @Resource?",
    options: [
      "Type-based vs name-based",
      "Both same",
      "@Resource is deprecated",
      "@Autowired is slower"
    ], answer: 0,explanation: "@Autowired injects dependencies by type, while @Resource injects by name by default and is part of Java standard."
  },
  {
    question: "What is @Qualifier used for?",
    options: [
      "Resolve multiple beans",
      "Lazy loading",
      "Scope definition",
      "Configuration"
    ], answer: 0,explanation: "@Qualifier is used to resolve ambiguity when multiple beans of the same type are available."
  },
  {
    question: "What is @Value used for?",
    options: [
      "Inject configuration values",
      "Inject beans",
      "Define scope",
      "Define controller"
    ], answer: 0,explanation: "@Value injects values from application.properties or application.yml into fields."
  },
  {
    question: "How do you change the server port in Spring Boot?",
    options: [
      "server.port property",
      "tomcat.xml",
      "web.xml",
      "context.xml"
    ], answer: 0,explanation: "The server.port property in configuration files is used to change the default port."
  }
];

const springBootDataRestQuiz = [
  {
    question: "How does Spring Boot connect to a database using JPA?",
    options: [
      "Using JDBC only",
      "Using Spring Data JPA starters",
      "Using Hibernate config manually",
      "Using XML only"
    ], answer: 1,explanation: "Spring Boot connects to databases using the spring-boot-starter-data-jpa dependency, which automatically configures JPA, Hibernate, DataSource, and EntityManager based on application properties."
  },
  {
    question: "Which dependency is required for Spring Data JPA?",
    options: [
      "spring-boot-starter-web",
      "spring-boot-starter-data-jpa",
      "spring-boot-starter-jdbc",
      "spring-context"
    ], answer: 1,explanation: "spring-boot-starter-data-jpa enables JPA repositories and integrates Hibernate as the default JPA implementation."
  },
  {
    question: "What is the purpose of @Entity annotation?",
    options: [
      "Defines REST controller",
      "Maps class to DB table",
      "Creates service",
      "Creates repository"
    ], answer: 1,explanation: "@Entity marks a Java class as a JPA entity, meaning it is mapped to a database table and managed by the persistence context."
  },
  {
    question: "What does @Id represent in JPA?",
    options: [
      "Foreign key",
      "Primary key",
      "Index",
      "Column name"
    ], answer: 1,explanation: "@Id identifies the primary key of an entity, which uniquely identifies each record in the database table."
  },
  {
    question: "Purpose of @GeneratedValue?",
    options: [
      "Manual ID",
      "Auto-generate primary key",
      "Validate ID",
      "Map column"
    ], answer: 1,explanation: "@GeneratedValue tells JPA to automatically generate primary key values using strategies like AUTO, IDENTITY, or SEQUENCE."
  },
  {
    question: "Which interface provides CRUD operations?",
    options: [
      "CrudRepository",
      "JpaRepository",
      "PagingAndSortingRepository",
      "All of the above"
    ], answer: 3,explanation: "CrudRepository, PagingAndSortingRepository, and JpaRepository all provide CRUD operations, with JpaRepository offering the most features."
  },
  {
    question: "Which repository provides pagination and sorting by default?",
    options: [
      "CrudRepository",
      "JpaRepository",
      "Repository",
      "EntityManager"
    ], answer: 1,explanation: "JpaRepository extends PagingAndSortingRepository, so it supports pagination and sorting out of the box."
  },
  {
    question: "How do you save an entity using JpaRepository?",
    options: [
      "persist()",
      "insert()",
      "save()",
      "add()"
    ], answer: 2,explanation: "The save() method inserts a new entity or updates an existing one depending on whether the ID already exists."
  },
  {
    question: "How do you fetch all records from database?",
    options: [
      "findOne()",
      "findAll()",
      "getAll()",
      "selectAll()"
    ], answer: 1,explanation: "findAll() retrieves all records from the database table mapped to the entity."
  },
  {
    question: "Which method deletes a record by ID?",
    options: [
      "remove()",
      "delete()",
      "deleteById()",
      "drop()"
    ], answer: 2,explanation: "deleteById() deletes a record using its primary key value."
  },
  {
    question: "How is pagination implemented in Spring Data JPA?",
    options: [
      "PageRequest",
      "LimitOffset",
      "RowBounds",
      "Criteria API"
    ], answer: 0,explanation: "PageRequest specifies page number and size, allowing efficient pagination at the database level."
  },
  {
    question: "Which interface represents paginated result?",
    options: [
      "List",
      "Page",
      "Slice",
      "Set"
    ], answer: 1,explanation: "Page contains paginated data along with metadata like total pages, total elements, and current page number."
  },
  {
    question: "How do you enable sorting in queries?",
    options: [
      "Sort object",
      "OrderBy annotation",
      "SQL only",
      "Native query"
    ], answer: 0,explanation: "Sort object allows sorting results dynamically without writing custom queries."
  },
  {
    question: "What is lazy fetching in JPA?",
    options: [
      "Data loaded immediately",
      "Data loaded when accessed",
      "Data loaded partially",
      "Data loaded manually"
    ], answer: 1,explanation: "Lazy fetching loads related entities only when they are accessed, improving performance and reducing unnecessary database calls."
  },
  {
    question: "What is eager fetching?",
    options: [
      "Load on demand",
      "Load at startup",
      "Load related entities immediately",
      "Manual loading"
    ], answer: 2,explanation: "Eager fetching loads related entities immediately along with the parent entity, which can increase memory usage."
  },
  {
    question: "Difference between @RequestMapping and @GetMapping?",
    options: [
      "Same",
      "@GetMapping is specialized",
      "@RequestMapping is deprecated",
      "@GetMapping supports POST"
    ], answer: 1,explanation: "@GetMapping is a shortcut for @RequestMapping(method = RequestMethod.GET), making code cleaner and more readable."
  },
  {
    question: "Which annotation handles HTTP POST requests?",
    options: [
      "@PostMapping",
      "@PutMapping",
      "@RequestMapping",
      "@GetMapping"
    ], answer: 0,explanation: "@PostMapping maps HTTP POST requests and is commonly used to create new resources."
  },
  {
    question: "What is @ControllerAdvice used for?",
    options: [
      "Request mapping",
      "Global exception handling",
      "Security",
      "Validation"
    ], answer: 1,explanation: "@ControllerAdvice allows centralized handling of exceptions across all controllers."
  },
  {
    question: "Purpose of @ExceptionHandler?",
    options: [
      "Handle validation",
      "Handle exceptions",
      "Handle requests",
      "Handle responses"
    ], answer: 1,explanation: "@ExceptionHandler handles specific exceptions and allows custom error responses."
  },
  {
    question: "How do you return custom error response?",
    options: [
      "Throw exception",
      "ResponseEntity",
      "System.out",
      "Logger"
    ], answer: 1,explanation: "ResponseEntity allows returning custom HTTP status codes and structured response bodies."
  },
  {
    question: "Which annotation validates request body?",
    options: [
      "@Validate",
      "@Valid",
      "@Check",
      "@Verify"
    ], answer: 1,explanation: "@Valid triggers bean validation rules defined using annotations like @NotNull and @Size."
  },
  {
    question: "How do you configure multiple data sources?",
    options: [
      "Single properties file",
      "Multiple DataSource beans",
      "Single EntityManager",
      "Not possible"
    ], answer: 1,explanation: "Multiple DataSource beans are defined with separate configurations to connect to multiple databases."
  },
  {
    question: "Which annotation marks primary datasource?",
    options: [
      "@Main",
      "@Primary",
      "@Default",
      "@Master"
    ], answer: 1,explanation: "@Primary tells Spring which DataSource bean to use by default when multiple beans are present."
  }
];

const springBootErrorHandlingQuiz = [
  {
    question: "What is @ControllerAdvice in Spring Boot?",
    options: ["A REST controller", "Global exception handler", "Repository annotation", "Bean scope"], answer: 1,explanation: "@ControllerAdvice allows centralized handling of exceptions across all controllers in the application, promoting clean and maintainable code."
  },
  {
    question: "Which annotation is used inside @ControllerAdvice to handle specific exceptions?",
    options: ["@ErrorHandler", "@Catch", "@ExceptionHandler", "@Handle"], answer: 2,explanation: "@ExceptionHandler maps a specific exception type to a handler method, allowing customized responses per exception."
  },
  {
    question: "What is the main benefit of global exception handling?",
    options: ["Faster execution", "Centralized error handling", "Better UI", "Less code"], answer: 1,explanation: "Global exception handling avoids repetitive try-catch blocks and ensures consistent responses for all controllers."
  },
  {
    question: "How do you create a custom exception in Spring Boot?",
    options: ["Extend RuntimeException", "Use @Exception", "Implement Error", "Use @CustomException"], answer: 0,explanation: "Custom exceptions are created by extending RuntimeException or Exception to represent domain-specific errors."
  },
  {
    question: "Which HTTP status code represents Bad Request?",
    options: ["200", "400", "404", "500"], answer: 1,explanation: "400 Bad Request indicates the client has sent invalid input that the server cannot process."
  },
  {
    question: "Which HTTP status code is returned when a resource is not found?",
    options: ["401", "403", "404", "500"], answer: 2,explanation: "404 Not Found is returned when the requested resource does not exist on the server."
  },
  {
    question: "Which HTTP status code indicates an internal server error?",
    options: ["400", "404", "500", "503"], answer: 2,explanation: "500 Internal Server Error indicates an unexpected server-side exception occurred."
  },
  {
    question: "How do you return a custom HTTP status in REST APIs?",
    options: ["Using @Status", "Using ResponseEntity", "Using @Error", "Using HttpServlet"], answer: 1,explanation: "ResponseEntity allows returning both a custom body and HTTP status code for REST responses."
  },
  {
    question: "Which class provides default exception handling in Spring MVC?",
    options: ["ExceptionResolver", "ResponseEntityExceptionHandler", "ErrorController", "DispatcherServlet"], answer: 1,explanation: "ResponseEntityExceptionHandler is a base class in Spring MVC providing default handling for common exceptions."
  },
  {
    question: "Difference between @ExceptionHandler and ResponseEntityExceptionHandler?",
    options: ["No difference", "One is global, one is local", "Both are same", "Used only in REST"], answer: 1,explanation: "@ExceptionHandler handles exceptions for a specific controller or globally with @ControllerAdvice, while ResponseEntityExceptionHandler provides base implementations for common exceptions."
  },
  {
    question: "How do you log exceptions in Spring Boot?",
    options: ["System.out.println", "Logger framework", "Exception.printStackTrace", "Console.log"], answer: 1,explanation: "Spring Boot recommends using logging frameworks like Logback or Log4j2 for structured and configurable logging."
  },
  {
    question: "Which logger is default in Spring Boot?",
    options: ["Log4j", "Logback", "SLF4J", "Commons Logging"], answer: 1,explanation: "Logback is the default logging framework in Spring Boot, integrated via SLF4J abstraction."
  },
  {
    question: "Which annotation is used to mark async methods?",
    options: ["@Async", "@Thread", "@Parallel", "@Background"], answer: 0,explanation: "@Async executes methods asynchronously in a separate thread pool to improve performance of long-running tasks."
  },
  {
    question: "How are exceptions handled in @Async methods?",
    options: ["Automatically", "Using AsyncUncaughtExceptionHandler", "Ignored", "Thrown to controller"], answer: 1,explanation: "AsyncUncaughtExceptionHandler allows handling exceptions thrown from void async methods since they cannot return ResponseEntity."
  },
  {
    question: "Which exception is thrown for unique constraint violations?",
    options: ["SQLException", "ConstraintViolationException", "DataIntegrityViolationException", "DuplicateKeyException"], answer: 2,explanation: "Spring translates database constraint violations into DataIntegrityViolationException for consistency across different databases."
  },
  {
    question: "Which exception occurs when foreign key constraint fails?",
    options: ["SQLSyntaxErrorException", "DataIntegrityViolationException", "NullPointerException", "JpaException"], answer: 1,explanation: "Foreign key constraint violations also throw DataIntegrityViolationException, allowing global exception handling."
  },
  {
    question: "How do you handle database constraint violations globally?",
    options: ["Using try-catch", "Using @ControllerAdvice", "Using filters", "Using interceptors"], answer: 1,explanation: "@ControllerAdvice allows catching database exceptions globally and returning consistent error responses."
  },
  {
    question: "What is a consistent error response?",
    options: ["Same message", "Same format for all errors", "Same status code", "Same exception"], answer: 1,explanation: "A consistent error response maintains a standard structure for all API errors, improving client-side error handling."
  },
  {
    question: "Which fields are commonly included in error response structure?",
    options: ["timestamp, status, message", "id only", "stacktrace only", "request body"], answer: 0,explanation: "Standard error responses usually include timestamp, status code, error message, and request path."
  },
  {
    question: "Which interface customizes error responses globally?",
    options: ["ErrorAttributes", "ErrorController", "ExceptionMapper", "HandlerExceptionResolver"], answer: 0,explanation: "ErrorAttributes allows overriding default error details returned by Spring Boot for all exceptions."
  },
  // ------------------------- Add more advanced ones to reach 75 -------------------------
  {
    question: "Which annotation handles method-level validation exceptions?",
    options: ["@Valid", "@Validated", "@ExceptionHandler", "@Check"], answer: 2,explanation: "@ExceptionHandler can handle MethodArgumentNotValidException thrown by validation annotations."
  },
  {
    question: "How do you customize validation error messages?",
    options: ["Custom messages in annotations", "Controller advice", "Logger", "application.properties only"], answer: 0,explanation: "Validation annotations like @NotNull, @Size allow custom messages to be defined for each field."
  },
  {
    question: "What exception is thrown when @Valid fails in request body?",
    options: ["ConstraintViolationException", "MethodArgumentNotValidException", "RuntimeException", "HttpMessageNotReadableException"], answer: 1,explanation: "Spring throws MethodArgumentNotValidException when @Valid detects invalid request data."
  },
  {
    question: "How do you handle MethodArgumentNotValidException globally?",
    options: ["@ControllerAdvice + @ExceptionHandler", "Try-catch in each controller", "Filters", "Interceptor"], answer: 0,explanation: "Using @ControllerAdvice with @ExceptionHandler allows centralized handling of validation errors."
  },
  {
    question: "How do you structure custom error responses for APIs?",
    options: ["Use POJO with timestamp, status, message", "Return String", "Return Map only", "Return List"], answer: 0,explanation: "Custom POJO with timestamp, status, message, and path ensures consistent and parseable API error responses."
  },
  {
    question: "Which HTTP status code indicates unauthorized access?",
    options: ["401", "403", "404", "500"], answer: 0,explanation: "401 Unauthorized is used when authentication is required but missing or invalid."
  },
  {
    question: "Which HTTP status code indicates forbidden access?",
    options: ["401", "403", "404", "500"], answer: 1,explanation: "403 Forbidden indicates the client is authenticated but does not have permission for the resource."
  },
  {
    question: "How can you handle multiple exceptions in one handler method?",
    options: ["Use array in @ExceptionHandler", "Multiple @ControllerAdvice", "Not possible", "Use filters"], answer: 0,explanation: "You can specify multiple exception classes in @ExceptionHandler({Exception1.class, Exception2.class}) to handle them in one method."
  },
  {
    question: "Which exception occurs if JSON request body is invalid?",
    options: ["HttpMessageNotReadableException", "MethodArgumentNotValidException", "RuntimeException", "DataIntegrityViolationException"], answer: 0,explanation: "Spring throws HttpMessageNotReadableException when it cannot deserialize the JSON body."
  },
  {
    question: "How do you provide default values in error response?",
    options: ["Set in POJO", "Controller logic only", "Spring default only", "Not possible"], answer: 0,explanation: "Default values like 'N/A' or 'Unknown' can be set in the custom error response POJO fields."
  }
  // Continue adding more to reach 75, following the same pattern
];


const springBootMicroservicesQuiz = [
  {
    question: "What is a microservice architecture?",
    options: ["Monolithic application", "Small independent services", "Single codebase", "Legacy system"], answer: 1,explanation: "Microservice architecture means building an application as a collection of small, independent services. Each service has its own responsibility, can be developed, deployed, and scaled independently, and usually communicates via REST or messaging."
  },
  {
    question: "Why are microservices used instead of monolithic architecture?",
    options: ["Less deployment", "Independent scaling", "Single database", "Simple code"], answer: 1,explanation: "Microservices allow independent scaling, faster development, fault isolation, and easier maintenance compared to monolithic applications."
  },
  {
    question: "What is service discovery in microservices?",
    options: ["Manual configuration", "Dynamic service lookup", "Static IP mapping", "DNS only"], answer: 1,explanation: "Service discovery allows services to dynamically find the network location of other services without hardcoding IP addresses or ports."
  },
  {
    question: "What is Eureka Server?",
    options: ["API Gateway", "Service Registry", "Load balancer", "Config server"], answer: 1,explanation: "Eureka Server is a service registry where all microservices register themselves and discover other available services."
  },
  {
    question: "What is Eureka Client?",
    options: ["Gateway", "Registered service", "Load balancer", "Database"], answer: 1,explanation: "A Eureka Client is a microservice that registers itself with the Eureka Server and uses it to discover other services."
  },
  {
    question: "What is client-side load balancing?",
    options: ["Server decides routing", "Client chooses service instance", "Hardware load balancing", "DNS routing"], answer: 1,explanation: "In client-side load balancing, the client itself decides which service instance to call using information from the service registry."
  },
  {
    question: "What is server-side load balancing?",
    options: ["Client chooses", "Dedicated load balancer chooses", "No balancing", "Static routing"], answer: 1,explanation: "In server-side load balancing, a dedicated load balancer like Nginx decides which backend service instance receives the request."
  },
  {
    question: "What is Ribbon in Spring Cloud?",
    options: ["API Gateway", "Client-side load balancer", "Service registry", "Message broker"], answer: 1,explanation: "Ribbon is a client-side load balancing library that works with Eureka to distribute requests among service instances."
  },
  {
    question: "What is an API Gateway?",
    options: ["Database gateway", "Single entry point", "Service registry", "Load balancer"], answer: 1,explanation: "An API Gateway acts as a single entry point for clients and routes requests to appropriate microservices while handling cross-cutting concerns."
  },
  {
    question: "Why is an API Gateway required in microservices?",
    options: ["Increase latency", "Centralize routing and security", "Store data", "Compile services"], answer: 1,explanation: "API Gateway centralizes routing, authentication, authorization, rate limiting, and logging, avoiding duplication across services."
  },
  {
    question: "Which is the recommended API Gateway in Spring Cloud?",
    options: ["Zuul", "Spring Cloud Gateway", "Ribbon", "Feign"], answer: 1,explanation: "Spring Cloud Gateway is the modern, reactive API Gateway recommended by Spring Cloud."
  },
  {
    question: "Spring Cloud Gateway is built on which technology?",
    options: ["Servlet API", "Netty and WebFlux", "Tomcat", "JSP"], answer: 1,explanation: "Spring Cloud Gateway is built on Netty and Spring WebFlux, making it non-blocking and reactive."
  },
  {
    question: "What is routing in Spring Cloud Gateway?",
    options: ["Database routing", "Forwarding requests", "Thread routing", "Queue routing"], answer: 1,explanation: "Routing defines how incoming requests are matched and forwarded to backend microservices."
  },
  {
    question: "What are filters in Spring Cloud Gateway?",
    options: ["Database filters", "Pre/Post processors", "Security managers", "Repositories"], answer: 1,explanation: "Filters allow modifying requests and responses before or after routing, such as adding headers or logging."
  },
  {
    question: "What is a circuit breaker pattern?",
    options: ["Network switch", "Fault tolerance pattern", "Load balancer", "Queue system"], answer: 1,explanation: "Circuit breaker is a fault-tolerance pattern that prevents repeated calls to failing services to avoid cascading failures."
  },
  {
    question: "Why is circuit breaker used in microservices?",
    options: ["Increase traffic", "Improve system stability", "Cache data", "Reduce code"], answer: 1,explanation: "Circuit breakers improve system stability by stopping calls to unhealthy services and allowing them time to recover."
  },
  {
    question: "Which library is commonly used for circuit breaker in Spring Boot?",
    options: ["Ribbon", "Resilience4j", "Kafka", "Feign"], answer: 1,explanation: "Resilience4j provides circuit breaker, retry, rate limiter, and bulkhead features for Spring Boot applications."
  },
  {
    question: "What are the states of a circuit breaker?",
    options: ["Start, Stop", "Open, Close", "Closed, Open, Half-Open", "Active, Inactive"], answer: 2,explanation: "Circuit breaker has three states: Closed (normal), Open (fail fast), and Half-Open (test recovery)."
  },
  {
    question: "What happens in Open state of a circuit breaker?",
    options: ["Requests pass", "Requests fail immediately", "Requests queue", "System restarts"], answer: 1,explanation: "In Open state, requests are rejected immediately without calling the failing service."
  },
  {
    question: "What is a fallback method?",
    options: ["Backup database", "Alternative response", "Retry logic", "Exception handler"], answer: 1,explanation: "A fallback method provides an alternative response when the main service call fails."
  },
  {
    question: "What is bulkhead pattern?",
    options: ["Caching", "Resource isolation", "Load balancing", "Service discovery"], answer: 1,explanation: "Bulkhead pattern isolates resources so that failure in one part does not affect the entire system."
  },
  {
    question: "What is retry pattern?",
    options: ["Stop execution", "Retry failed calls", "Cache data", "Fail fast"], answer: 1,explanation: "Retry pattern automatically retries a failed operation for transient errors."
  },
  {
    question: "What is rate limiting?",
    options: ["Increase traffic", "Limit requests", "Cache responses", "Balance load"], answer: 1,explanation: "Rate limiting restricts the number of requests a client can make within a specific time window."
  },
  {
    question: "What is asynchronous communication in microservices?",
    options: ["Blocking calls", "Message-based communication", "Synchronous REST", "Database calls"], answer: 1,explanation: "Asynchronous communication uses messaging systems to allow services to communicate without waiting for immediate responses."
  },
  {
    question: "Which tool is commonly used for async messaging?",
    options: ["REST", "Kafka", "JPA", "Ribbon"], answer: 1,explanation: "Kafka is commonly used for high-throughput asynchronous message-based communication."
  },
  {
    question: "What is RabbitMQ?",
    options: ["Database", "Message broker", "API Gateway", "Service registry"], answer: 1,explanation: "RabbitMQ is a message broker that enables asynchronous communication between microservices."
  },
  {
    question: "What is eventual consistency?",
    options: ["Immediate consistency", "Strong consistency", "Consistency over time", "Rollback"], answer: 2,explanation: "Eventual consistency means data will become consistent across services after some time, not immediately."
  },
  {
    question: "What is Saga pattern?",
    options: ["Single transaction", "Distributed transaction pattern", "Caching", "Load balancing"], answer: 1,explanation: "Saga pattern manages distributed transactions by breaking them into a sequence of local transactions with compensating actions."
  },
  {
    question: "What is Two-Phase Commit (2PC)?",
    options: ["Local transaction", "Distributed transaction protocol", "Async communication", "Caching"], answer: 1,explanation: "Two-Phase Commit ensures atomicity across distributed systems by coordinating commit or rollback."
  },
  {
    question: "Why is 2PC not recommended in microservices?",
    options: ["Too simple", "Blocking and slow", "Stateless", "Cheap"], answer: 1,explanation: "2PC is blocking and reduces scalability, making it unsuitable for microservices."
  },
  {
    question: "What is Spring Boot Actuator?",
    options: ["ORM tool", "Monitoring tool", "Gateway", "Build tool"], answer: 1,explanation: "Spring Boot Actuator provides production-ready endpoints for monitoring and managing applications."
  },
  {
    question: "Which actuator endpoint shows application health?",
    options: ["/info", "/health", "/metrics", "/beans"], answer: 1,explanation: "The /health endpoint shows the health status of the application."
  },
  {
    question: "Why is centralized configuration needed?",
    options: ["Hardcoding", "Central management", "Increase code", "Avoid cloud"], answer: 1,explanation: "Centralized configuration allows managing configurations for all services from one place."
  },
  {
    question: "Which tool provides centralized configuration in Spring Cloud?",
    options: ["Eureka", "Spring Cloud Config", "Ribbon", "Gateway"], answer: 1,explanation: "Spring Cloud Config provides centralized configuration management."
  },
  {
    question: "What is Docker used for in microservices?",
    options: ["Virtual machines", "Containerization", "Monitoring", "Logging"], answer: 1,explanation: "Docker packages applications and dependencies into lightweight containers for consistent deployment."
  },
  {
    question: "Why is Kubernetes used with microservices?",
    options: ["UI design", "Container orchestration", "Database", "Logging"], answer: 1,explanation: "Kubernetes manages container deployment, scaling, and networking in microservices environments."
  }
];



const springBootSecurityQuiz = [
  {
    question: "How do you secure Spring Boot applications?",
    options: [
      "Using Spring Security",
      "Using firewalls only",
      "Using @Secure annotations only",
      "No security needed"
    ], answer: 0,explanation: "Spring Security provides comprehensive authentication, authorization, and protection against common attacks in Spring Boot applications."
  },
  {
    question: "What is the difference between authentication and authorization?",
    options: [
      "Authentication verifies identity; authorization grants permissions",
      "Authentication grants permissions; authorization verifies identity",
      "Both are the same",
      "Authentication is optional"
    ], answer: 0,explanation: "Authentication checks who the user is, while authorization determines what resources the user can access."
  },
  {
    question: "How do you implement JWT-based authentication in Spring Boot?",
    options: [
      "Generate JWT on login and validate in filters",
      "Store JWT in database",
      "Use XML configuration",
      "Use @JWT annotation"
    ], answer: 0,explanation: "JWT (JSON Web Token) is generated after user login, sent with each request, and validated via Spring Security filters for stateless authentication."
  },
  {
    question: "What is OAuth2 in Spring Boot?",
    options: [
      "An authorization framework for secure API access",
      "An encryption method",
      "A database protocol",
      "A logging library"
    ], answer: 0,explanation: "OAuth2 provides delegated access to resources, allowing users to grant access to applications without sharing credentials."
  },
  {
    question: "How do you implement role-based access control (RBAC)?",
    options: [
      "Assign roles to users and secure endpoints with @PreAuthorize or hasRole",
      "Use only authentication",
      "Store roles in session only",
      "No roles needed"
    ], answer: 0,explanation: "RBAC secures methods and endpoints based on assigned user roles, ensuring only authorized users can access specific resources."
  },
  {
    question: "How do you secure REST APIs using Spring Security?",
    options: [
      "Use HTTP Basic, JWT, or OAuth2 with method and URL security",
      "Use only @Controller",
      "Use firewalls",
      "Encrypt the database only"
    ], answer: 0,explanation: "Spring Security can secure REST APIs via authentication (JWT, OAuth2) and authorization (roles, permissions) along with HTTPS."
  },
  {
    question: "How do you secure inter-service communication in microservices?",
    options: [
      "Use HTTPS and OAuth2 or JWT tokens",
      "Use HTTP only",
      "Use local files",
      "No need for security"
    ], answer: 0,explanation: "Microservices communicate securely via HTTPS, and tokens or OAuth2 ensures only authorized services access endpoints."
  },
  {
    question: "How do you prevent CSRF attacks in Spring Boot?",
    options: [
      "Enable CSRF protection in Spring Security",
      "Use JWT for stateless APIs",
      "Use HTTPS",
      "All of the above"
    ], answer: 3,explanation: "CSRF attacks can be mitigated using Spring Security CSRF protection, stateless JWT tokens, and HTTPS."
  },
  {
    question: "How do you handle CORS issues in Spring Boot?",
    options: [
      "Use @CrossOrigin annotation or configure CorsRegistry",
      "Use firewalls",
      "Use XML config",
      "Ignore it"
    ], answer: 0,explanation: "CORS (Cross-Origin Resource Sharing) issues are solved by explicitly allowing origins via @CrossOrigin or WebMvcConfigurer."
  },
  {
    question: "How do you implement throttling and rate-limiting for security?",
    options: [
      "Use Spring Cloud Gateway, filters, or libraries like Bucket4j",
      "Use only JWT",
      "Use HTTPS",
      "Use firewalls"
    ], answer: 0,explanation: "Rate-limiting prevents abuse by limiting the number of requests per user or IP using gateways, filters, or external libraries."
  },
  {
    question: "How do you encrypt sensitive data like passwords?",
    options: [
      "Use BCryptPasswordEncoder or Argon2PasswordEncoder",
      "Use plain SHA256",
      "Store as plain text",
      "Use Base64 encoding"
    ], answer: 0,explanation: "Passwords should be securely hashed with strong algorithms like BCrypt or Argon2 to prevent compromise."
  },
  {
    question: "How do you integrate LDAP or Active Directory authentication?",
    options: [
      "Use Spring Security LDAP module and configure authentication provider",
      "Use JDBC only",
      "Use @Repository only",
      "Use @Controller advice"
    ], answer: 0,explanation: "Spring Security LDAP module allows authentication against directory servers such as LDAP or AD for enterprise users."
  },
  {
    question: "What is the difference between stateless and stateful authentication?",
    options: [
      "Stateless stores no session info; stateful stores user session on server",
      "Stateless stores session; stateful stores nothing",
      "Both are same",
      "Stateless uses cookies only"
    ], answer: 0,explanation: "Stateless authentication (e.g., JWT) does not store session on server, while stateful authentication keeps session data on server memory or database."
  },
  {
    question: "How do you handle token expiration and refresh tokens?",
    options: [
      "Use refresh token endpoints to issue new access tokens",
      "Ask user to login again manually",
      "Use JWT only without expiration",
      "Store tokens in DB only"
    ], answer: 0,explanation: "Refresh tokens allow users to obtain a new access token without logging in again, maintaining security and usability."
  },
  {
    question: "How do you prevent brute-force attacks in Spring Boot?",
    options: [
      "Implement account lockout, rate limiting, or CAPTCHA",
      "Use HTTP only",
      "Store passwords in plain text",
      "Use @Service"
    ], answer: 0,explanation: "Brute-force attacks can be prevented by limiting failed login attempts, using CAPTCHA, or locking accounts temporarily."
  },
  {
    question: "How do you implement custom security filters?",
    options: [
      "Extend OncePerRequestFilter and register in security configuration",
      "Use @Controller only",
      "Use global exception handler",
      "Use @Service only"
    ], answer: 0,explanation: "Custom filters allow inspecting and modifying requests/responses for authentication, authorization, or logging."
  },
  {
    question: "Which annotation secures methods at the service layer?",
    options: [
      "@PreAuthorize",
      "@Secured",
      "@RolesAllowed",
      "All of the above"
    ], answer: 3,explanation: "Spring Security provides multiple annotations (@PreAuthorize, @Secured, @RolesAllowed) for method-level security."
  },
  {
    question: "Which HTTP header is used to pass JWT token?",
    options: [
      "Authorization",
      "X-Token",
      "Set-Cookie",
      "Content-Type"
    ], answer: 0,explanation: "JWT tokens are commonly passed in the Authorization header with the Bearer scheme."
  },
  {
    question: "What is the purpose of CSRF token?",
    options: [
      "Prevent cross-site request forgery",
      "Encrypt passwords",
      "Authenticate user",
      "Validate JWT"
    ], answer: 0,explanation: "CSRF token ensures that state-changing requests originate from the authenticated client, preventing malicious cross-site requests."
  },
  {
    question: "How do you disable CSRF for stateless REST APIs?",
    options: [
      "http.csrf().disable()",
      "Remove @Controller",
      "Remove @RestController",
      "Use @Async"
    ], answer: 0,explanation: "For stateless APIs using JWT, CSRF can be disabled because sessions are not used."
  },
  {
    question: "Which password encoder is recommended for modern applications?",
    options: [
      "BCryptPasswordEncoder",
      "MD5",
      "SHA-1",
      "Plain text"
    ], answer: 0,explanation: "BCrypt is adaptive and protects against brute-force attacks, making it suitable for modern applications."
  },
  {
    question: "How do you restrict access to endpoints by roles?",
    options: [
      "Use .hasRole('ROLE_ADMIN') or @PreAuthorize('hasRole('ROLE_ADMIN')')",
      "Use @Controller",
      "Use filters only",
      "Use global exception handler"
    ], answer: 0,explanation: "Endpoints can be secured based on roles using Spring Security DSL or method-level security annotations."
  },
  {
    question: "What is stateless authentication in Spring Boot?",
    options: [
      "Authentication without server session",
      "Authentication with session",
      "Using cookies only",
      "Using database only"
    ], answer: 0,explanation: "Stateless authentication does not store session info on the server; each request is self-contained (e.g., JWT)."
  },
  {
    question: "How do you configure custom login page in Spring Security?",
    options: [
      "Using http.formLogin().loginPage('/login')",
      "Using @LoginPage",
      "Using web.xml",
      "Using application.properties only"
    ], answer: 0,explanation: "Custom login pages are configured via formLogin() DSL in Spring Security configuration."
  },
  {
    question: "What is the default password encoder if none is specified in Spring Security 5+?",
    options: [
      "No encoder",
      "DelegatingPasswordEncoder",
      "BCryptPasswordEncoder",
      "MD5PasswordEncoder"
    ], answer: 1,explanation: "Spring Security 5+ uses DelegatingPasswordEncoder by default, which supports multiple encoding types."
  },
  {
    question: "Which HTTP header prevents clickjacking attacks?",
    options: [
      "X-Frame-Options",
      "Content-Security-Policy",
      "Authorization",
      "X-XSS-Protection"
    ], answer: 0,explanation: "X-Frame-Options header prevents embedding the site in frames, protecting against clickjacking."
  },
  {
    question: "Which annotation enforces role-based access on controller methods?",
    options: [
      "@PreAuthorize",
      "@PostMapping",
      "@RequestMapping",
      "@Component"
    ], answer: 0,explanation: "@PreAuthorize allows method-level security based on roles or expressions."
  },
  {
    question: "What is the purpose of @RolesAllowed in Spring Security?",
    options: [
      "Restrict access to users with specified roles",
      "Encrypt passwords",
      "Configure JWT",
      "Define REST endpoints"
    ], answer: 0,explanation: "@RolesAllowed is a JSR-250 annotation for role-based access control at method level."
  },
  {
    question: "How can you secure a REST API with API keys?",
    options: [
      "Use custom filters to validate key in headers",
      "Use only @Controller",
      "Use CSRF token",
      "Use global exception handler"
    ], answer: 0,explanation: "API keys can be validated in Spring Security filters before allowing access to endpoints."
  },
  {
    question: "How can you prevent session fixation attacks in Spring Boot?",
    options: [
      "Change session ID after login",
      "Use HTTPS only",
      "Use JWT only",
      "Encrypt cookies"
    ], answer: 0,explanation: "Spring Security automatically protects against session fixation by creating a new session after login."
  },
  {
    question: "How do you enable method security in Spring Boot?",
    options: [
      "Use @EnableGlobalMethodSecurity(prePostEnabled = true)",
      "Use @EnableSecurity",
      "Use @ComponentScan",
      "Use @PreAuthorize only"
    ], answer: 0,explanation: "@EnableGlobalMethodSecurity activates annotations like @PreAuthorize and @Secured."
  },
  {
    question: "Which filter validates JWT token before request reaches controller?",
    options: [
      "OncePerRequestFilter",
      "SecurityContextHolder",
      "AuthenticationManager",
      "HttpSecurity"
    ], answer: 0,explanation: "Custom filters extending OncePerRequestFilter validate JWT tokens and populate SecurityContext."
  },
  {
    question: "How do you store roles and authorities in Spring Security?",
    options: [
      "GrantedAuthority objects in UserDetails",
      "Plain strings only",
      "In session variables only",
      "In cookies"
    ], answer: 0,explanation: "Roles and permissions are stored as GrantedAuthority objects in the UserDetails implementation."
  },
  {
    question: "How do you secure WebSocket endpoints in Spring Boot?",
    options: [
      "Use Spring Security with STOMP or handshake interceptors",
      "Use @RestController",
      "Use CSRF token only",
      "Use JWT only"
    ], answer: 0,explanation: "WebSocket security is configured via Spring Security and handshake interceptors for authentication and authorization."
  },
  {
    question: "How can you prevent brute-force attacks on login endpoints?",
    options: [
      "Implement login attempt limits and lockout",
      "Use HTTPS only",
      "Use JWT only",
      "Encrypt passwords only"
    ], answer: 0,explanation: "Brute-force protection involves tracking login attempts and locking accounts temporarily after multiple failures."
  },
  {
    question: "How can you integrate OAuth2 login with Google or Facebook?",
    options: [
      "Use spring-boot-starter-oauth2-client and configure providers",
      "Use @Controller only",
      "Use JWT manually",
      "Use @Async"
    ], answer: 0,explanation: "Spring Security OAuth2 Client module allows integrating social login providers seamlessly."
  },
  {
    question: "What is the purpose of SecurityContextHolder?",
    options: [
      "Stores authentication information for current thread",
      "Stores cookies",
      "Stores session variables",
      "Stores JWT only"
    ], answer: 0,explanation: "SecurityContextHolder holds the Authentication object representing the currently authenticated user."
  },
  {
    question: "How do you prevent XSS attacks in Spring Boot?",
    options: [
      "Sanitize inputs and use Content Security Policy",
      "Encrypt passwords",
      "Use JWT",
      "Use HTTPS only"
    ], answer: 0,explanation: "Cross-site scripting (XSS) attacks are mitigated by validating input, encoding outputs, and enforcing CSP headers."
  },
  {
    question: "How do you configure password strength policies?",
    options: [
      "Validate password in custom UserDetailsService or use PasswordEncoder",
      "Use @Controller",
      "Use JWT",
      "Use HTTPS only"
    ], answer: 0,explanation: "Password strength can be enforced in the registration logic using validators and strong password encoders."
  },
  {
    question: "How do you implement refresh tokens for JWT authentication?",
    options: [
      "Issue a long-lived refresh token and exchange for new access token",
      "Use only access tokens",
      "Use cookies only",
      "Store JWT in DB only"
    ], answer: 0,explanation: "Refresh tokens allow stateless applications to renew access tokens without forcing users to log in again."
  },
  {
    question: "How can you audit security events in Spring Boot?",
    options: [
      "Use Spring Security event listeners",
      "Use @RestController",
      "Use @ControllerAdvice",
      "Use JWT only"
    ], answer: 0,explanation: "Spring Security publishes events for authentication, authorization, and failures, which can be monitored for auditing."
  },
  {
    question: "How do you handle expired JWT tokens?",
    options: [
      "Return 401 Unauthorized and optionally allow refresh token",
      "Ignore the token",
      "Return 200 OK",
      "Encrypt the token"
    ], answer: 0,explanation: "Expired tokens result in 401 responses, and clients can use refresh tokens to obtain a new token."
  },
  {
    question: "What is the difference between symmetric and asymmetric encryption for JWT?",
    options: [
      "Symmetric uses single key; asymmetric uses public/private key pair",
      "Both are the same",
      "Asymmetric is faster",
      "Symmetric uses two keys"
    ], answer: 0,explanation: "Symmetric encryption uses the same secret key for signing and verification; asymmetric uses a key pair for signing and verifying tokens."
  },
  {
    question: "How can you enforce HTTPS in Spring Boot?",
    options: [
      "Redirect HTTP to HTTPS using security configuration or Tomcat connector",
      "Use JWT only",
      "Use @Controller only",
      "Use CSRF"
    ], answer: 0,explanation: "Spring Boot can enforce HTTPS either via configuration or programmatically redirecting requests to secure endpoints."
  },
  {
    question: "How do you restrict access to specific IP addresses?",
    options: [
      "Use Spring Security expressions or filters to check request IP",
      "Use @Controller only",
      "Use JWT only",
      "Use @Async"
    ], answer: 0,explanation: "IP whitelisting or blacklisting can be implemented in Spring Security filters or via expression-based access control."
  },
  {
    question: "How do you integrate LDAP groups with roles in Spring Security?",
    options: [
      "Map LDAP group membership to GrantedAuthorities in UserDetailsService",
      "Use JWT only",
      "Use @Controller only",
      "Use global exception handler"
    ], answer: 0,explanation: "LDAP groups can be converted to Spring Security roles/authorities for access control decisions."
  },
  {
    question: "How do you implement multi-factor authentication in Spring Boot?",
    options: [
      "Combine password-based login with TOTP or SMS code verification",
      "Use only JWT",
      "Use @Controller only",
      "Use HTTPS only"
    ], answer: 0,explanation: "MFA enhances security by requiring a second factor, such as a TOTP app or SMS code, after password authentication."
  }
];




const springBootMemoryPerformanceQuiz = [
  {
    question: "Which memory areas does JVM manage for a Java application?",
    options: [
      "Heap, Stack, Metaspace, Code Cache",
      "Heap, Stack, Cache only",
      "Metaspace, Database, Stack",
      "Heap, Registers, CPU"
    ], answer: 0,explanation: "JVM manages Heap (objects), Stack (method calls), Metaspace (class metadata), and Code Cache (JIT compiled code)."
  },
  {
    question: "What is the difference between Heap and Stack memory?",
    options: [
      "Heap stores objects, Stack stores method call frames",
      "Heap is faster, Stack is slower",
      "Heap stores primitives, Stack stores objects",
      "Both store objects the same way"
    ], answer: 0,explanation: "Heap stores all instantiated objects, while Stack holds method call frames including local variables and references."
  },
  {
    question: "What is Garbage Collection (GC) in Java?",
    options: [
      "Automatic memory management",
      "Manual memory deletion",
      "Compiling code",
      "Thread scheduling"
    ], answer: 0,explanation: "GC automatically removes unused objects from Heap to free memory and prevent leaks."
  },
  {
    question: "Which GC algorithms are commonly used in JVM?",
    options: [
      "Serial, Parallel, CMS, G1",
      "LRU, FIFO, LIFO",
      "Mark, Sweep, Compact only",
      "Stack, Heap, Metaspace"
    ], answer: 0,explanation: "JVM provides Serial, Parallel, Concurrent Mark Sweep (CMS), and Garbage-First (G1) collectors for different use cases."
  },
  {
    question: "What causes memory leaks in Spring Boot applications?",
    options: [
      "Unreleased references, large caches, static collections",
      "Too many threads",
      "JVM version mismatch",
      "Controller annotations"
    ], answer: 0,explanation: "Memory leaks occur when objects are unintentionally held in memory, preventing GC from freeing space."
  },
  {
    question: "Which tools can detect memory leaks in JVM applications?",
    options: [
      "VisualVM, JConsole, Eclipse MAT",
      "JDK compiler only",
      "Maven, Gradle",
      "Spring Actuator only"
    ], answer: 0,explanation: "VisualVM, JConsole, and Eclipse Memory Analyzer Tool (MAT) help analyze Heap and identify memory leaks."
  },
  {
    question: "How can you optimize memory usage in Spring Boot?",
    options: [
      "Use appropriate bean scopes, caching, lazy-loading, and GC tuning",
      "Disable logging",
      "Remove @Controller",
      "Increase database size"
    ], answer: 0,explanation: "Proper bean management, caching, lazy loading, and JVM tuning reduce memory footprint in Spring Boot."
  },
  {
    question: "How does Singleton vs Prototype bean scope affect memory?",
    options: [
      "Singleton uses less memory than prototype",
      "Prototype uses less memory than singleton",
      "Both use same memory",
      "Only Singleton impacts memory"
    ], answer: 0,explanation: "Singleton beans are created once per container, saving memory; prototype beans create a new instance per injection."
  },
  {
    question: "How does caching impact memory in Spring Boot?",
    options: [
      "Caches consume Heap space and may lead to memory pressure if unbounded",
      "Caching has no memory impact",
      "Caches reduce stack memory only",
      "Caching affects thread count only"
    ], answer: 0,explanation: "Caches store objects in memory to improve performance, but excessive caching can increase memory usage."
  },
  {
    question: "How does lazy loading affect memory?",
    options: [
      "Delays object creation, reducing initial memory usage",
      "Creates all objects upfront",
      "Consumes stack memory only",
      "Reduces CPU usage but increases memory"
    ], answer: 0,explanation: "Lazy loading initializes beans or entities only when needed, reducing memory pressure at startup."
  },
  {
    question: "What is a Heap dump?",
    options: [
      "Snapshot of JVM Heap at runtime",
      "Snapshot of Stack memory",
      "Garbage Collector log",
      "Thread dump only"
    ], answer: 0,explanation: "Heap dumps capture all objects in Heap at a point in time for memory analysis and leak detection."
  },
  {
    question: "What is a Thread dump?",
    options: [
      "Snapshot of all threads and their states",
      "Snapshot of Heap objects",
      "Garbage Collection stats",
      "CPU usage only"
    ], answer: 0,explanation: "Thread dumps provide insights into running threads, blocked threads, and deadlocks for performance debugging."
  },
  {
    question: "Which JVM options control memory size?",
    options: [
      "-Xmx, -Xms, -XX:+UseG1GC",
      "-Dmemory.limit",
      "-jar memory",
      "-Xdebug only"
    ], answer: 0,explanation: "-Xms sets initial Heap, -Xmx sets max Heap, and -XX:+UseG1GC enables G1 Garbage Collector."
  },
  {
    question: "How can CPU and memory profiling help in Spring Boot apps?",
    options: [
      "Identifies bottlenecks and high-memory usage methods",
      "Compiles code faster",
      "Reduces log size",
      "Automatically fixes memory leaks"
    ], answer: 0,explanation: "Profiling helps detect inefficient code, hot methods, and memory-heavy operations to optimize performance."
  },
  {
    question: "How do you handle OutOfMemoryError in production?",
    options: [
      "Analyze Heap dumps, increase memory, optimize code",
      "Ignore the error",
      "Restart server manually",
      "Disable logging"
    ], answer: 0,explanation: "OOM errors require analyzing memory usage, optimizing object allocation, and possibly tuning JVM parameters."
  }
];
