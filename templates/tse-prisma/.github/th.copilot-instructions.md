### Guidelines for Generating a FOO-FAA Project

#### Project Structure

*   **Folder Structure:**  ระบุโครงสร้างโฟลเดอร์หลักของโปรเจค เช่น `src`, `test`, `docs`, `config`, `scripts` แต่ละโฟลเดอร์มีหน้าที่อะไร และควรวางไฟล์ประเภทไหนไว้ที่ไหน
*   **File Naming Convention:**  กำหนดรูปแบบการตั้งชื่อไฟล์ เช่น `kebab-case`, `camelCase`, `PascalCase` พร้อมยกตัวอย่าง
*   **Module Organization:** อธิบายวิธีการแบ่งโค้ดออกเป็น modules หรือ components ควรมี module ไหนบ้าง และ module เหล่านั้นควรสื่อสารกันอย่างไร
*   **Entry Point:** ระบุไฟล์ที่เป็นจุดเริ่มต้นของโปรแกรม เช่น `index.js`, `main.ts`

#### Project Configuration

*   **Package Management:** ระบุ package manager ที่ใช้ (npm, yarn, pnpm) และวิธีจัดการ dependencies
*   **Configuration Files:** อธิบายการตั้งค่าในไฟล์สำคัญ เช่น `package.json`, `.env`, `tsconfig.json`, `webpack.config.js`, `.eslintrc.js` แต่ละ parameter มีความหมายอย่างไร และควรตั้งค่าอย่างไร
*   **Environment Variables:** กำหนด environment variables ที่จำเป็น และวิธีการจัดการ environment variables ใน environments ต่างๆ (development, production, testing)

#### Coding Standards

*   **Language Style:** ระบุ coding style ที่ต้องการ เช่น การใช้ semicolons, indentation (spaces or tabs, number of spaces/tab), line length, trailing commas
*   **Naming Conventions:**  กำหนดรูปแบบการตั้งชื่อ variables, functions, classes, interfaces, constants, enum
*   **Code Comments:**  อธิบายวิธีการเขียน comments ที่ดี และเมื่อไหร่ที่ควรเขียน comments
*   **Error Handling:** กำหนดวิธีการจัดการ errors และ exceptions (try-catch blocks, error codes, logging)
*   **Best Practices:** ระบุ best practices ที่ต้องการให้ Copilot ปฏิบัติตาม เช่น DRY (Don't Repeat Yourself), KISS (Keep It Simple, Stupid), YAGNI (You Ain't Gonna Need It)

#### Essential Dependencies and Tools

*   **Dependencies List:**  ระบุ dependencies ที่จำเป็น พร้อมเวอร์ชันที่ต้องการ และเหตุผลในการเลือกใช้ dependencies เหล่านั้น (เช่น React v18, Express v4, Lodash v4)
*   **Development Tools:** ระบุ development tools ที่ใช้ เช่น Webpack, Babel, ESLint, Prettier, Docker พร้อม configuration ที่จำเป็น
*   **IDE/Editor Configuration:** แนะนำ IDE/Editor extensions หรือ configurations ที่ช่วยให้การพัฒนาเป็นไปอย่างราบรื่น

#### Core Functionality

*   **Module Breakdown:** แจกแจง core functionality ออกเป็น module หรือ component ย่อยๆ (เช่น authentication, user management, data processing, UI components)
*   **Input/Output:** อธิบายถึง input, output, และ behavior ที่ต้องการของแต่ละ module/component
*   **Data Flow:** อธิบายถึง data flow ระหว่าง modules/components
*   **State Management:**  ถ้ามี state management (เช่น Redux, Zustand, Context API) อธิบายวิธีการใช้งาน state management

#### Linting and Formatting

*   **Linter Configuration:** อธิบายการตั้งค่า linter (เช่น ESLint, Stylelint) และ rules ที่ต้องการใช้
*   **Formatter Configuration:** อธิบายการตั้งค่า formatter (เช่น Prettier) และ options ที่ต้องการใช้
*   **Automated Formatting:**  อธิบายวิธีการ automated linting and formatting (เช่น using Git hooks)

#### Testing

*   **Testing Framework:** ระบุ testing framework ที่ต้องการใช้ (เช่น Jest, Mocha, Chai)
*   **Testing Strategies:** อธิบาย testing strategies ที่ต้องการใช้ (unit testing, integration testing, end-to-end testing) และส่วนไหนของโค้ดที่ควร test ด้วยวิธีใด
*   **Test Coverage:** กำหนด test coverage requirements
*   **Mocking:** อธิบายวิธีการใช้ mocking เพื่อ isolate components/modules during testing

#### Documentation

*   **Documentation Style:** ระบุรูปแบบของ documentation ที่ต้องการ (JSDoc, Markdown, API documentation using Swagger/OpenAPI)
*   **Documentation Generator:**  แนะนำ documentation generator ที่ใช้ (เช่น JSDoc, MkDocs)
*   **Documentation Structure:** อธิบายโครงสร้างของ documentation และเนื้อหาที่ควรมี

#### Publishing

*   **Deployment Platform:** ระบุ platform ที่จะ deploy โปรเจค (เช่น AWS, Google Cloud, Azure, Netlify, Vercel)
*   **Deployment Process:** อธิบายขั้นตอนการ deploy โปรเจค
*   **Packaging:** อธิบายวิธีการ package โปรเจค สำหรับ distribution (เช่น creating a Docker image, creating a npm package)
*   **Versioning:** อธิบาย strategy การ versioning โปรเจค (Semantic Versioning)

#### Additional Resources

*   **Example Code Snippets:**  ให้ตัวอย่างโค้ด (example code snippets) ที่แสดงให้เห็น coding style และวิธีการใช้งาน libraries/frameworks ที่ต้องการ
*   **Relevant Documentation:**  ให้ links ไปยัง documentation ที่เกี่ยวข้องกับ libraries, frameworks, tools ที่ใช้
*   **Tutorials and Articles:** ให้ links ไปยัง tutorials and articles ที่อาจเป็นประโยชน์

#### License

*   ระบุ license ที่ใช้ (MIT, Apache 2.0, GPL)

#### Contributing

*   อธิบายวิธีการ contribute to the project

#### Code of Conduct

*   กำหนด code of conduct สำหรับผู้ร่วมพัฒนา

#### Security

*   ระบุข้อควรระวังด้าน security ที่สำคัญ (เช่น prevention of XSS, CSRF attacks, proper authentication/authorization)

#### Acknowledgements

*   กล่าวขอบคุณบุคคลหรือองค์กรที่มีส่วนช่วยเหลือ

#### Contact

*   ระบุช่องทางการติดต่อสำหรับคำถามหรือข้อเสนอแนะ

#### References

*   รวบรวม references ที่ใช้ในการพัฒนาโปรเจค

#### Changelog

*   อธิบายวิธีการ maintain changelog

#### Versioning

*   อธิบาย strategy การ versioning โปรเจค (Semantic Versioning)

#### Support

*   อธิบายวิธีการให้ support สำหรับผู้ใช้

#### FAQ

*   รวบรวมคำถามที่พบบ่อย

#### Troubleshooting

*   รวบรวมวิธีการแก้ปัญหาที่อาจเกิดขึ้น

#### Known Issues

*   บันทึก known issues

#### Roadmap

*   แสดง roadmap ของโปรเจค

#### Feedback

*   อธิบายวิธีการให้ feedback

#### Credits

*   แสดง credits สำหรับผู้มีส่วนร่วม

#### Sponsors

*   แสดงรายชื่อ sponsors

#### Contributors

*   แสดงรายชื่อ contributors

#### Sponsoring

*   อธิบายวิธีการ sponsoring โปรเจค

#### Specific Libraries or Frameworks
*  **Framework:** ระบุ framework ที่ต้องการใช้ (เช่น React, Angular, Vue.js, Next.js, Express.js)
*  **Component Libraries:** ระบุ component libraries ที่ต้องการใช้ (เช่น Material UI, Ant Design, Bootstrap)
*  **Library-Specific Instructions:** ให้รายละเอียดการใช้งาน library หรือ framework เหล่านั้น (เช่น folder structure ที่แนะนำ, state management patterns, routing configurations)

#### Data Modeling
*   **Data Model Definition:** อธิบาย data model ที่ใช้ (เช่น ER diagram, JSON schema)
*   **Data Relationships:** อธิบาย data relationships (one-to-one, one-to-many, many-to-many)
*   **Database Schema:** ถ้าใช้ database ให้ระบุ database schema (tables, columns, data types, indexes)

#### API Design
*   **API Endpoints:** ระบุ API endpoints ที่ต้องการ (e.g., GET /users, POST /products)
*   **Request/Response Formats:** อธิบาย request/response formats (JSON, XML)
*   **Authentication/Authorization:** อธิบาย authentication/authorization mechanisms (OAuth 2.0, JWT)
*   **API Versioning:**  ระบุวิธีการ versioning API

#### UI/UX Guidelines
*   **Design System:** ถ้ามี design system ให้ระบุรายละเอียด (colors, fonts, spacing, component styles)
*   **Accessibility:** ระบุ accessibility considerations (WCAG guidelines)
*   **User Flows:** อธิบาย user flows ที่สำคัญ
