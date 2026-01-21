# Proportion Quiz - Thực hành Tỉ lệ Thức

Một ứng dụng web đơn giản giúp học sinh lớp 4-5 thực hành giải bài toán **tỉ lệ thuận** và **tỉ lệ nghịch** bằng cách lập **tỉ lệ thức** và tính giá trị x.

Ứng dụng hỗ trợ:
- Đề bài ngẫu nhiên với số nguyên đảm bảo kết quả x là số nguyên.
- Giao diện tối, thân thiện với điện thoại (responsive).
- Chấp nhận nhiều cách lập tỉ lệ thức (hoán đổi vế, đổi chéo) miễn là toán học đúng.
- Kiểm tra đáp án tức thì + hiển thị đáp án mẫu phổ biến.
- Thống kê số câu làm / đúng.
- Lịch sử 5 bài gần nhất.

Demo giao diện: https://xn--msiu-goa8b.vn/github/proportion-quiz/

## Tính năng chính

- Sinh đề bài ngẫu nhiên từ file `data.json` (có thể mở rộng thêm đề).
- Đảm bảo x luôn là số nguyên (không thập phân).
- Linh hoạt kiểm tra tỉ lệ thức: chấp nhận hoán đổi vế, đảo ngược (dùng kiểm tra chéo a×d = b×c).
- Hiển thị đáp án mẫu theo cách phổ biến trong sách giáo khoa Việt Nam.
- Thống kê realtime: số câu làm / đúng / phần trăm.
- Xem lại 5 bài gần nhất (đề, đáp án đúng, cách bạn trả lời, kết quả).
- Giao diện dark mode, responsive (tốt trên mobile).

## Công nghệ sử dụng

- HTML5
- CSS3 (Flexbox + Gradient + Responsive)
- Vanilla JavaScript (không framework)
- JSON cho dữ liệu đề bài

Không dùng thư viện ngoài → nhẹ, dễ deploy.

## Cấu trúc thư mục
proportion-quiz/<br>
├── index.html          # Trang chính<br>
├── styles.css          # Giao diện tối, responsive<br>
├── script.js           # Logic sinh đề, kiểm tra đáp án, thống kê, lịch sử<br>
└── data.json           # Danh sách đề bài mẫu (tỉ lệ thuận & nghịch)<br>


## Cách chạy cục bộ

1. Clone repo:
   ```bash
   git clone https://github.com/lemasieu/proportion-quiz.git
   cd proportion-quiz
   ```
2. Mở file index.html bằng trình duyệt (Chrome/Firefox/Edge).<br>
Hoặc dùng live server (VS Code extension) để xem realtime.

3. Mở rộng & cải tiến (gợi ý)

- Thêm âm thanh đúng/sai (ding / buzz).
- Lưu tiến độ bằng localStorage (thống kê không mất khi reload).
- Thêm mức độ khó (dễ/trung bình/khó).
- Thêm giải thích từng bước khi sai.
- Thêm timer hoặc điểm số.
- Dịch sang tiếng Anh nếu muốn dùng quốc tế.

4. License<br>
MIT License – Tự do sử dụng, chỉnh sửa, phân phối (có thể dùng cho giáo viên, học sinh, hoặc dự án cá nhân).
