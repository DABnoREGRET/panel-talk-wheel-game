const questions = [
    {
        id: 1,
        question: "Khởi nghiệp là gì?",
        options: [
            "Thành lập một công ty đã có sẵn mô hình kinh doanh.",
            "Tạo ra một doanh nghiệp mới với ý tưởng sáng tạo.",
            "Mua lại một doanh nghiệp đang hoạt động.",
            "Đầu tư vào thị trường chứng khoán."
        ],
        correctAnswer: 1
    },
    {
        id: 2,
        question: "Yếu tố nào sau đây quan trọng nhất đối với một người khởi nghiệp?",
        options: [
            "Vốn đầu tư lớn.",
            "Ý tưởng độc đáo và khả năng thực thi.",
            "Bằng cấp cao.",
            "Mối quan hệ rộng."
        ],
        correctAnswer: 1
    },
    {
        id: 3,
        question: "Mục tiêu chính của việc lập kế hoạch kinh doanh là gì?",
        options: [
            "Thu hút vốn đầu tư.",
            "Xác định rõ ràng mục tiêu và chiến lược kinh doanh.",
            "Dự đoán chính xác doanh thu trong tương lai.",
            "Tuyển dụng nhân viên giỏi."
        ],
        correctAnswer: 1
    },
    {
        id: 4,
        question: "\"Thị trường mục tiêu\" là gì?",
        options: [
            "Toàn bộ người tiêu dùng trên thị trường.",
            "Nhóm khách hàng tiềm năng mà doanh nghiệp hướng đến.",
            "Các đối thủ cạnh tranh trên thị trường.",
            "Các nhà đầu tư tiềm năng."
        ],
        correctAnswer: 1
    },
    {
        id: 5,
        question: "\"Vốn khởi nghiệp\" là gì?",
        options: [
            "Tiền tiết kiệm cá nhân.",
            "Khoản tiền cần thiết để bắt đầu một doanh nghiệp.",
            "Lợi nhuận từ hoạt động kinh doanh.",
            "Khoản vay từ ngân hàng."
        ],
        correctAnswer: 1
    },
    {
        id: 6,
        question: "Hình thức gọi vốn nào phổ biến trong giai đoạn đầu khởi nghiệp?",
        options: [
            "Phát hành cổ phiếu.",
            "Vay vốn ngân hàng.",
            "Gọi vốn từ người thân, bạn bè (family and friends).",
            "Phát hành trái phiếu."
        ],
        correctAnswer: 2
    },
    {
        id: 7,
        question: "\"MVP\" trong khởi nghiệp là viết tắt của cụm từ nào?",
        options: [
            "Most Valuable Product.",
            "Minimum Viable Product.",
            "Market Validation Process.",
            "Major Venture Project."
        ],
        correctAnswer: 1
    },
    {
        id: 8,
        question: "Thất bại trong khởi nghiệp nên được nhìn nhận như thế nào?",
        options: [
            "Một dấu chấm hết cho sự nghiệp.",
            "Một bài học kinh nghiệm quý giá.",
            "Một lý do để từ bỏ ước mơ.",
            "Một điều đáng xấu hổ."
        ],
        correctAnswer: 1
    },
    {
        id: 9,
        question: "Yếu tố nào giúp tạo dựng thương hiệu mạnh cho doanh nghiệp khởi nghiệp?",
        options: [
            "Quảng cáo rầm rộ.",
            "Chất lượng sản phẩm/dịch vụ tốt và sự hài lòng của khách hàng.",
            "Giá cả cạnh tranh.",
            "Mạng lưới phân phối rộng khắp."
        ],
        correctAnswer: 1
    },
    {
        id: 10,
        question: "\"Tinh thần khởi nghiệp\" (entrepreneurial mindset) bao gồm những đặc điểm nào?",
        options: [
            "Sáng tạo, dám nghĩ dám làm, và khả năng thích ứng.",
            "Bảo thủ, ngại thay đổi, và sợ rủi ro.",
            "Làm việc theo khuôn mẫu, tuân thủ quy trình có sẵn.",
            "Chỉ tập trung vào lợi nhuận trước mắt."
        ],
        correctAnswer: 0
    },
    {
        id: 11,
        question: "Chuyển đổi số là gì?",
        options: [
            "Quá trình thay đổi hình thức các sản phẩm truyền thống.",
            "Quá trình ứng dụng công nghệ số vào mọi lĩnh vực trong doanh nghiệp và xã hội.",
            "Quá trình phát triển các phần mềm quản lý doanh nghiệp.",
            "Quá trình đào tạo nhân lực trong các ngành công nghệ."
        ],
        correctAnswer: 1
    },
    {
        id: 12,
        question: "Công nghệ nào là nền tảng quan trọng của chuyển đổi số?",
        options: [
            "Máy tính cá nhân.",
            "Internet of Things (IoT).",
            "Internet.",
            "Phần mềm văn phòng."
        ],
        correctAnswer: 2
    },
    {
        id: 13,
        question: "Lợi ích của chuyển đổi số là gì?",
        options: [
            "Tăng chi phí hoạt động.",
            "Giảm khả năng cạnh tranh.",
            "Cải thiện hiệu quả công việc.",
            "Giới hạn khả năng sáng tạo."
        ],
        correctAnswer: 2
    },
    {
        id: 14,
        question: "Cloud computing (Điện toán đám mây) là gì?",
        options: [
            "Quản lý phần mềm trên máy tính cá nhân.",
            "Lưu trữ và xử lý dữ liệu qua các máy chủ từ xa qua internet.",
            "Phát triển phần mềm trên nền tảng di động.",
            "Kết nối các máy tính trong một mạng LAN."
        ],
        correctAnswer: 1
    },
    {
        id: 15,
        question: "\"Big Data\" ám chỉ điều gì?",
        options: [
            "Số lượng lớn các tài liệu giấy.",
            "Dữ liệu quá lớn và phức tạp mà các hệ thống quản lý dữ liệu truyền thống không thể xử lý.",
            "Các cuộc khảo sát có số liệu lớn.",
            "Các bộ dữ liệu trong máy tính cá nhân."
        ],
        correctAnswer: 1
    },
    {
        id: 16,
        question: "Chuyển đổi số có thể mang lại lợi ích gì cho doanh nghiệp?",
        options: [
            "Giảm chi phí sản xuất.",
            "Tăng sự hài lòng của khách hàng.",
            "Tất cả các đáp án trên."
        ],
        correctAnswer: 2
    },
    {
        id: 17,
        question: "Công nghệ nào không phải là một phần của Chuyển đổi số?",
        options: [
            "Trí tuệ nhân tạo (AI).",
            "Công nghệ blockchain.",
            "Máy photocopy.",
            "Tự động hóa quy trình bằng robot (RPA)."
        ],
        correctAnswer: 2
    },
    {
        id: 18,
        question: "Ứng dụng của AI trong chuyển đổi số là gì?",
        options: [
            "Tăng tốc độ kết nối internet.",
            "Phân tích và dự đoán xu hướng thị trường.",
            "Chỉ giúp giải trí cho người dùng.",
            "Lưu trữ dữ liệu trên cloud."
        ],
        correctAnswer: 1
    },
    {
        id: 19,
        question: "Mô hình kinh doanh nào là kết quả của chuyển đổi số?",
        options: [
            "Kinh doanh truyền thống dựa trên cửa hàng.",
            "Kinh doanh dựa trên nền tảng số và thương mại điện tử.",
            "Kinh doanh chỉ qua điện thoại.",
            "Kinh doanh chỉ qua thư từ."
        ],
        correctAnswer: 1
    },
    {
        id: 20,
        question: "Blockchain được sử dụng chủ yếu để làm gì?",
        options: [
            "Lưu trữ video.",
            "Bảo mật và xác minh giao dịch.",
            "Tăng tốc độ internet.",
            "Chạy phần mềm trên điện thoại."
        ],
        correctAnswer: 1
    },
    {
        id: 21,
        question: "Mô hình Lean Startup tập trung vào điều gì?",
        options: [
            "Phát triển sản phẩm hoàn thiện ngay từ đầu.",
            "Tối ưu hóa nguồn lực tài chính.",
            "Xây dựng sản phẩm tối thiểu và học hỏi từ thị trường.",
            "Mở rộng quy mô nhanh chóng."
        ],
        correctAnswer: 2
    },
    {
        id: 22,
        question: "\"Pivot\" trong khởi nghiệp có nghĩa là gì?",
        options: [
            "Thay đổi hoàn toàn mô hình kinh doanh dựa trên phản hồi thị trường.",
            "Tăng cường quảng cáo.",
            "Tuyển dụng thêm nhân sự.",
            "Vay thêm vốn."
        ],
        correctAnswer: 0
    },
    {
        id: 23,
        question: "Yếu tố nào KHÔNG phải là thách thức khi khởi nghiệp?",
        options: [
            "Thiếu vốn.",
            "Cạnh tranh gay gắt.",
            "Nhu cầu thị trường ổn định.",
            "Thay đổi công nghệ nhanh."
        ],
        correctAnswer: 2
    },
    {
        id: 24,
        question: "Crowdfunding là hình thức gọi vốn nào?",
        options: [
            "Huy động vốn từ cộng đồng qua nền tảng trực tuyến.",
            "Vay ngân hàng.",
            "Đầu tư mạo hiểm.",
            "Phát hành trái phiếu."
        ],
        correctAnswer: 0
    },
    {
        id: 25,
        question: "Công nghệ 5G ảnh hưởng thế nào đến chuyển đổi số?",
        options: [
            "Tăng tốc độ truyền dữ liệu và kết nối thiết bị.",
            "Giảm chi phí phần cứng.",
            "Hạn chế sử dụng IoT.",
            "Tập trung vào lưu trữ dữ liệu cá nhân."
        ],
        correctAnswer: 0
    },
    {
        id: 26,
        question: "Ví dụ về ứng dụng IoT trong doanh nghiệp?",
        options: [
            "Hệ thống quản lý kho tự động.",
            "Phần mềm kế toán.",
            "Website bán hàng.",
            "Email marketing."
        ],
        correctAnswer: 0
    },
    {
        id: 27,
        question: "Đặc điểm của Blockchain?",
        options: [
            "Tính phi tập trung.",
            "Tốc độ xử lý cao.",
            "Dễ dàng sửa đổi dữ liệu.",
            "Không cần bảo mật."
        ],
        correctAnswer: 0
    },
    {
        id: 28,
        question: "Phát biểu đúng về thương mại điện tử (E-commerce)?",
        options: [
            "Chỉ bao gồm bán hàng qua website.",
            "Là mua bán hàng hóa/dịch vụ qua Internet.",
            "Không liên quan đến thanh toán trực tuyến.",
            "Chỉ dành cho doanh nghiệp lớn."
        ],
        correctAnswer: 1
    },
    {
        id: 29,
        question: "Lợi ích của Digital Marketing so với truyền thống?",
        options: [
            "Đo lường hiệu quả chi tiết.",
            "Tiếp cận ít đối tượng hơn.",
            "Chi phí cao hơn.",
            "Không thể tương tác với khách hàng."
        ],
        correctAnswer: 0
    },
    {
        id: 30,
        question: "Công cụ phân tích dữ liệu phổ biến?",
        options: [
            "Google Analytics.",
            "Microsoft Word.",
            "Adobe Photoshop.",
            "AutoCAD."
        ],
        correctAnswer: 0
    },
    {
        id: 31,
        question: "\"Scalability\" trong khởi nghiệp là gì?",
        options: [
            "Khả năng mở rộng quy mô doanh nghiệp.",
            "Giảm chi phí sản xuất.",
            "Tăng lợi nhuận tức thì.",
            "Thu hút nhân tài."
        ],
        correctAnswer: 0
    },
    {
        id: 32,
        question: "Yếu tố chìa khóa trong chuyển đổi số giáo dục?",
        options: [
            "Sử dụng sách giáo khoa điện tử.",
            "Học trực tuyến và công nghệ AI hỗ trợ giảng dạy.",
            "Tăng số lượng giáo viên.",
            "Xây dựng thêm trường học."
        ],
        correctAnswer: 1
    },
    {
        id: 33,
        question: "Rủi ro khi ứng dụng AI trong doanh nghiệp?",
        options: [
            "Thiếu dữ liệu chất lượng.",
            "Tăng tính minh bạch.",
            "Giảm chi phí vận hành.",
            "Cải thiện trải nghiệm khách hàng."
        ],
        correctAnswer: 0
    },
    {
        id: 34,
        question: "Mục tiêu của số hóa (digitization)?",
        options: [
            "Chuyển đổi thông tin từ dạng vật lý sang số.",
            "Thay thế hoàn toàn con người bằng máy móc.",
            "Tăng doanh thu ngay lập tức.",
            "Giảm số lượng nhân viên."
        ],
        correctAnswer: 0
    },
    {
        id: 35,
        question: "Fintech liên quan đến lĩnh vực nào?",
        options: [
            "Công nghệ tài chính.",
            "Nông nghiệp công nghệ cao.",
            "Giáo dục trực tuyến.",
            "Y tế từ xa."
        ],
        correctAnswer: 0
    },
    {
        id: 36,
        question: "Lợi ích của Chatbot trong doanh nghiệp?",
        options: [
            "Hỗ trợ khách hàng 24/7.",
            "Giảm tương tác trực tiếp.",
            "Tăng chi phí nhân sự.",
            "Hạn chế cá nhân hóa dịch vụ."
        ],
        correctAnswer: 0
    },
    {
        id: 37,
        question: "Ví dụ về công nghệ AR (Augmented Reality)?",
        options: [
            "Ứng dụng lọc ảnh trên điện thoại.",
            "Trò chơi Pokemon Go.",
            "Máy tính bảng.",
            "Hệ thống GPS."
        ],
        correctAnswer: 1
    },
    {
        id: 38,
        question: "Thành phần KHÔNG thuộc hệ sinh thái khởi nghiệp?",
        options: [
            "Cố vấn (Mentor).",
            "Nhà đầu tư thiên thần.",
            "Đối thủ cạnh tranh.",
            "Khách hàng."
        ],
        correctAnswer: 2
    },
    {
        id: 39,
        question: "Chỉ số đo lường hiệu quả Digital Marketing?",
        options: [
            "Tỷ lệ chuyển đổi (Conversion Rate).",
            "Số lượng nhân viên.",
            "Diện tích văn phòng.",
            "Giá cổ phiếu."
        ],
        correctAnswer: 0
    },
    {
        id: 40,
        question: "Ứng dụng của VR (Virtual Reality) trong đào tạo?",
        options: [
            "Mô phỏng tình huống thực tế để huấn luyện.",
            "Tạo video quảng cáo.",
            "Quản lý dự án.",
            "Phân tích dữ liệu tài chính."
        ],
        correctAnswer: 0
    }
];