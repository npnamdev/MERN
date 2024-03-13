 // Sử dụng var:
 var x = 5;
 var name = "John";

 // Sử dụng let:
 let y = 10;
 let age = 25;

 // Sử dụng const:
 const PI = 3.14;
 const MAX_SIZE = 100;



 // Sự khác biệt giữa var, let, và const:
 // var được sử dụng để khai báo biến có phạm vi toàn cục hoặc phạm vi hàm. Biến được khai báo bằng var có thể được khai báo lại và cập nhật giá trị.

 // let được sử dụng để khai báo biến trong phạm vi block. Biến được khai báo bằng let không thể được khai báo lại trong cùng phạm vi và không bị hoisting.

 // const tạo một hằng số có thể không thay đổi giá trị sau khi được gán. Biến được khai báo bằng const phải được gán giá trị khi khai báo và không thể được gán lại giá trị mới.




 // Quy tắc đặt tên biến:

 // Tên biến nên được chọn sao cho dễ hiểu và mô tả chức năng của biến.

 // Bắt đầu tên biến bằng chữ cái (a-z hoặc A-Z), dấu gạch dưới (_) hoặc ký tự dấu gạch (không được bắt đầu bằng số).

 // Tên biến không được sử dụng các từ khóa đã được JavaScript định nghĩa (ví dụ như "let", "const", "if", "for", v.v.).

 // Thường thì tên biến được đặt bằng cách sử dụng chữ thường và sử dụng dấu gạch dưới (_) để phân tách các từ (ví dụ: my_variable_name).

 // Các loại kiểu đặt tên biến:

 // Camel Case
 var myVariableName = "value";
 var firstName = "John";
 var numberOfStudents = 20;

 // Pascal Case
 var MyVariableName = "value";
 var FirstName = "John";
 var NumberOfStudents = 20;

 // Kiểu Snake
 var my_variable_name = "value";
 var first_name = "John";
 var number_of_students = 20;




 // các kiểu dữ liệu cơ bản và phức tạp trong JavaScript
 // Kiểu dữ liệu cơ bản(kiểu nguyên thủy):

 // Số (Number): Đại diện cho các giá trị số.
 var num = 10;
 var pi = 3.14;

 // Chuỗi (String): Đại diện cho dãy ký tự.
 var name = "John";
 var message = 'Hello, world!';

 // Boolean: Đại diện cho giá trị true hoặc false.
 var isTrue = true;
 var isFalse = false;

 // Null: Đại diện cho một giá trị rỗng hoặc không tồn tại.
 var nullValue = null;

 // Undefined: Biến chưa được gán giá trị.
 var undefinedValue;

 // Kiểu dữ liệu Nâng cao:
 // Mảng (Array): Đại diện cho một tập hợp các giá trị.
 var numbers = [1, 2, 3, 4, 5];
 var names = ["John", "Jane", "Doe"];

 // Đối tượng (Object): Đại diện cho một tập hợp các thuộc tính và giá trị.
 var person = {
     name: "John",
     age: 30,
     isStudent: false
 };

 // Kiểu dữ liệu động:
 var dynamicVariable = 10; // Biến này có kiểu dữ liệu là số
 dynamicVariable = "Hello"; // Biến này bây giờ có kiểu dữ liệu là chuỗi
 dynamicVariable = true; // Biến này bây giờ có kiểu dữ liệu là boolean



 // các toán tử phổ biến
 // Toán tử số học

 // Toán tử cộng (+): Thực hiện phép cộng hai giá trị hoặc nối hai chuỗi.
 var sum = 5 + 3; // sum = 8
 var fullName = "John" + " " + "Doe"; // fullName = "John Doe"

 // Toán tử trừ (-): Thực hiện phép trừ hai giá trị.
 var difference = 10 - 5; // difference = 5

 // Toán tử nhân (*): Thực hiện phép nhân hai giá trị.
 var product = 4 * 3; // product = 12

 // Toán tử chia (/): Thực hiện phép chia hai giá trị.
 var quotient = 20 / 5; // quotient = 4



 // Toán tử gán:

 // Toán tử gán (=): Gán giá trị bên phải cho biến bên trái.
 var x = 10; // Biến x được gán giá trị là 10
 var y = x + 5; // Biến y được gán giá trị là giá trị của x cộng thêm 5

 // Toán tử so sánh:
 var a = 5;
 var b = "5";
 console.log(a == b); // true, vì giá trị của a và b là giống nhau

 // Toán tử so sánh tuyệt đối (===): So sánh xem hai giá trị có bằng nhau không (bao gồm cả kiểu dữ liệu).
 var a = 5;
 var b = "5";
 console.log(a === b); // false, vì kiểu dữ liệu của a là số, còn b là chuỗi
