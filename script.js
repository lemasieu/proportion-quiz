let currentBai = null;
let so1, so2, so3, correctX;
let tongCau = 0;
let cauDung = 0;
let lichSu = []; // mảng lưu tối đa 5 bài gần nhất

// Load dữ liệu đề bài
async function loadBai() {
    const response = await fetch('data.json');
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    currentBai = data[randomIndex];

    // Sinh số đảm bảo x là số nguyên
    if (currentBai.type === 'thuan') {
        so1 = Math.floor(Math.random() * 8) + 2;   // 2-9
        so2 = Math.floor(Math.random() * 20) + 5;  // 5-24
        let multiplier = Math.floor(Math.random() * 4) + 2;
        so3 = so1 * multiplier;
        correctX = (so3 * so2) / so1;
    } else {
        so3 = Math.floor(Math.random() * 6) + 2;   // 2-7
        so2 = Math.floor(Math.random() * 20) + 5;
        let multiplier = Math.floor(Math.random() * 4) + 2;
        so1 = so3 * multiplier;
        correctX = (so1 * so2) / so3;
    }

    let de = currentBai.de
        .replace('[so1]', so1)
        .replace('[so2]', so2)
        .replace('[so3]', so3);
    
    document.getElementById('de-bai').innerHTML = de;

    document.getElementById('o1').value = '';
    document.getElementById('o2').value = '';
    document.getElementById('o3').value = '';
    document.getElementById('o4').value = '';
    document.getElementById('ket-qua').textContent = '';
}

// Kiểm tra đáp án
// Hàm phụ: kiểm tra xem 4 số có tạo thành tỉ lệ thức đúng không (a/b = c/d ⇔ a*d == b*c)
function laTyLeThucDung(a, b, c, d) {
    // Tránh chia cho 0
    if (b === 0 || d === 0) return false;
    // So sánh chéo với sai số nhỏ (phòng nhập số thực)
    return Math.abs(a * d - b * c) < 0.001;
}

// Trong hàm loadBai() hoặc global, không cần thay đổi gì nhiều
// Nhưng đảm bảo correctX đã tính đúng (đã có từ trước)

function kiemTra() {
    const o1 = parseFloat(document.getElementById('o1').value);
    const o2 = parseFloat(document.getElementById('o2').value);
    const o3 = parseFloat(document.getElementById('o3').value);
    const o4 = parseFloat(document.getElementById('o4').value);

    if (isNaN(o1) || isNaN(o2) || isNaN(o3) || isNaN(o4)) {
        document.getElementById('ket-qua').textContent = 'Vui lòng nhập đầy đủ các ô số!';
        return;
    }

    let cachMoTa = "";
    let mauX = 0;

    if (currentBai.type === 'thuan') {
        // Tỉ lệ thuận: quãng đường / thời gian = const
        // Cách phổ biến: x : thời gian_mới = quãng_đường_cũ : thời_gian_cũ
        cachMoTa = `x : ${so3} = ${so2} : ${so1}`;
        mauX = (so2 * so3) / so1;
    } else {
        // Tỉ lệ nghịch: công_nhân × ngày = const
        // Cách phổ biến: x : ngày_cũ = công_nhân_cũ : công_nhân_mới
        cachMoTa = `x : ${so2} = ${so1} : ${so3}`;
        mauX = (so1 * so2) / so3;
    }

    const tyLeDung = laTyLeThucDung(o1, o2, o3, o4);
    const xDung    = Math.abs(o4 - mauX) < 0.001;
    const dung     = tyLeDung && xDung;

    tongCau++;
    if (dung) cauDung++;

    // CẬP NHẬT THỐNG KÊ - phần này phải có và phải chạy
    const tyLe = tongCau > 0 ? Math.round((cauDung / tongCau) * 100) : 0;
    const thongKeEl = document.getElementById('thong-ke');
    if (thongKeEl) {
        thongKeEl.textContent = `Đã làm: ${tongCau} câu | Đúng: ${cauDung} (${tyLe}%)`;
    } else {
        console.warn("Không tìm thấy phần tử #thong-ke trong HTML");
    }

    // Lưu lịch sử (cập nhật đáp án mẫu đúng loại)
    const baiInfo = {
        de: document.getElementById('de-bai').innerHTML,
        dapAn: `${cachMoTa} → x = ${mauX}`,
        banTraLoi: `${o4} : ${o2} = ${o1} : ${o3}`,
        ketQua: dung ? 'Đúng' : 'Sai',
        dung: dung
    };
    lichSu.unshift(baiInfo);
    if (lichSu.length > 5) lichSu.pop();

    // Phản hồi
    if (dung) {
        document.getElementById('ket-qua').innerHTML = 
            'Chính xác! 🎉<br>Tỉ lệ thức của bạn hợp lệ.';
        document.getElementById('ket-qua').style.color = '#4caf50';
    } else {
        document.getElementById('ket-qua').innerHTML = 
            `Sai rồi.<br><br>` +
            `Đáp án mẫu (cách phổ biến nhất):<br>` +
            `${cachMoTa}<br>` +
            `→ x = ${mauX}<br><br>` +
            `Các cách tương đương (đổi chéo, hoán đổi vế) cũng được chấp nhận nếu tỉ lệ đúng.`;
        document.getElementById('ket-qua').style.color = '#f44336';
    }
}

// Hàm kiểm tra chéo
function laTyLeThucDung(o1, o2, o3, o4) {
    if (o2 === 0 || o4 === 0) return false;
    // x / o2 = o1 / o3  ⇔  x * o3 = o2 * o1
    return Math.abs(o4 * o3 - o2 * o1) < 0.001;
}

// Hiển thị lịch sử
function hienThiLichSu() {
    const content = document.getElementById('lich-su-content');
    content.innerHTML = '';
    
    if (lichSu.length === 0) {
        content.innerHTML = '<p>Chưa có bài nào được làm.</p>';
    } else {
        lichSu.forEach(item => {
            const div = document.createElement('div');
            div.className = 'lich-su-item';
            div.innerHTML = `
                <p><strong>Đề:</strong> ${item.de}</p>
                <p><strong>Đáp án đúng:</strong> ${item.dapAn}</p>
                <p><strong>Bạn trả lời:</strong> ${item.banTraLoi}</p>
                <p class="${item.dung ? 'dung' : 'sai'}"><strong>Kết quả:</strong> ${item.ketQua}</p>
            `;
            content.appendChild(div);
        });
    }
    
    document.getElementById('lich-su').style.display = 'block';
}

// Sự kiện
document.getElementById('kiem-tra').addEventListener('click', kiemTra);
document.getElementById('bai-moi').addEventListener('click', loadBai);
document.getElementById('xem-lich-su').addEventListener('click', hienThiLichSu);
document.getElementById('dong-lich-su').addEventListener('click', () => {
    document.getElementById('lich-su').style.display = 'none';
});

// Khởi động
loadBai();