1. useRef:
   1.1. dùng để giữ lại tham chiếu cho biến sau mỗi lần component re-render:

ví dụ:
const [counter,setCounter] = useState(0);
const counter2 = useRef(0);

console.log counter2;

return (
<button onClick = {()=> {setCounter(counter+1)
counter2.current += 5}}
)

1.2. dùng để tương tác với các phần tử trong DOM
=> TH phổ biến: lấy thẻ input, lấy value của thẻ input
=> dùng để lấy value của dữ liệu mới nhất trong DOM khi component được mount lại vào DOM

            useRef: giữ được gái trị sau mỗi lần re-render
            useState: không giữ được gái trị sau mỗi lần re-render

2. memo(hàm callback, (prevProps, nextProps)=>{return true})
   => dùng khi component cha re-render nhưng không re-render component con
   => memo sẽ kiểm tra khi component cha re-render, nếu như không có bất cứ một props nào của component con bị thay đổi thì component con sẽ không re-render.

   2.1. bọc component con lại bằng memo:
   const ChildComponent = memo(()=> console.log(child))

   2.2. nếu không truyền tham số thứ 2 này: (prevProps, nextProps)=>{return true} thì props của hàm callback ở tham số 1 thay đổi thì sẽ re-render nhưng nếu có tham số 2 thì sẽ so sánh prevProps và nextProps nếu khác thì sẽ re-render.

3. useCallback(hàm callback, dependency):
   => thường dùng với memo
   => dùng để giữ lại tham chiếu của một hàm khi hàm đó bị gọi trong component khi re-render (hàm callback sẽ được tạo mới khi component re-render thì vẫn sẽ giữ tham chiếu cũ)

   vd: Dependency mảng rỗng: const handleCounterChange = useCallback(()=>{setCounter(counter+1)},[]); => sẽ luôn trả về tham chiếu của hàm này

   vd: Dependency truyền vào: const handleCounterChange = useCallback(()=>{setCounter(counter+1)},[counter]); => sẽ trả về tham chiếu mới

4. useMemo(callback, dependency):

5. useImperativeHandle(): công khai ra một số phương thức để component cha có thể sử dụng của component con (API của child) => khó và ít dùng

=> điều khiển component con bằng component cha4

5. Debaounce: là khoảng dừng:
   5.1. Ví dụ: việc search sản phẩm thì sẽ không gọi API sau mỗi lần onChange mà sẽ delay khoảng 1s rồi mới gọi API

---------DAY 40----------------------------------------

1. redux: quy trình quản lý state
2. react-redux: cầu nối giữa React và Redux

---------DAY 41---------------------------

1. axios: xử dụng XMLhttp request
