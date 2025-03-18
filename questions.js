const questions = [
    {
        id: 1,
        question: "Một startup công nghệ đang phát triển một ứng dụng AI cho thị trường Việt Nam. Trong bối cảnh cạnh tranh gay gắt và nguồn lực hạn chế, chiến lược khởi nghiệp nào sau đây là phù hợp nhất?",
        options: [
            "Tập trung phát triển sản phẩm hoàn thiện với đầy đủ tính năng trước khi ra mắt thị trường.",
            "Áp dụng phương pháp Lean Startup với MVP, thu thập phản hồi người dùng và điều chỉnh linh hoạt.",
            "Đầu tư mạnh vào marketing để xây dựng thương hiệu trước khi có sản phẩm.",
            "Tìm kiếm đối tác nước ngoài để nhượng quyền công nghệ sẵn có."
        ],
        correctAnswer: 0
    },
    {
        id: 2,
        question: "Trong quá trình gọi vốn Series A, một startup cần ưu tiên yếu tố nào để thuyết phục nhà đầu tư?",
        options: [
            "Kế hoạch tài chính chi tiết và dự báo doanh thu 5 năm.",
            "Bằng chứng về Product-Market Fit và khả năng tăng trưởng nhanh.",
            "Danh sách đội ngũ quản lý có kinh nghiệm từ các tập đoàn lớn.",
            "Chiến lược marketing và ngân sách quảng cáo."
        ],
        correctAnswer: 0
    },
    {
        id: 3,
        question: "Khi xây dựng kế hoạch kinh doanh cho một startup fintech, yếu tố quan trọng nhất cần tập trung là gì?",
        options: [
            "Phân tích chi tiết về quy định pháp lý và tuân thủ trong lĩnh vực tài chính.",
            "Chiến lược tạo lợi thế cạnh tranh thông qua công nghệ và trải nghiệm người dùng.",
            "Kế hoạch huy động vốn từ các quỹ đầu tư mạo hiểm.",
            "Chiến lược marketing để thu hút khách hàng mới."
        ],
        correctAnswer: 0
    },
    {
        id: 4,
        question: "Một startup B2B cung cấp giải pháp phần mềm quản lý doanh nghiệp nên xác định thị trường mục tiêu như thế nào?",
        options: [
            "Tất cả các doanh nghiệp vừa và nhỏ trong khu vực.",
            "Doanh nghiệp có nhu cầu cụ thể về chuyển đổi số và khả năng chi trả phù hợp.",
            "Các doanh nghiệp đã có hệ thống phần mềm cũ.",
            "Các công ty khởi nghiệp mới thành lập."
        ],
        correctAnswer: 0
    },
    {
        id: 5,
        question: "Một startup đang phát triển nền tảng thanh toán điện tử cần cân nhắc chiến lược vốn nào để tối ưu hóa tăng trưởng và kiểm soát rủi ro?",
        options: [
            "Sử dụng hoàn toàn vốn tự có để duy trì quyền kiểm soát tuyệt đối.",
            "Kết hợp vốn góp từ nhà đầu tư chiến lược và quỹ đầu tư mạo hiểm để tận dụng mạng lưới và kinh nghiệm.",
            "Vay ngân hàng với lãi suất ưu đãi để tránh pha loãng cổ phần.",
            "Huy động vốn cộng đồng thông qua ICO/STO."
        ],
        correctAnswer: 0
    },
    {
        id: 6,
        question: "Trong bối cảnh khủng hoảng kinh tế, startup nên áp dụng chiến lược gọi vốn nào?",
        options: [
            "Tạm dừng hoạt động để bảo toàn vốn hiện có.",
            "Tìm kiếm các nhà đầu tư thiên thần với điều khoản ưu đãi.",
            "Tối ưu hóa burn rate và tập trung vào các chỉ số unit economics để thu hút nhà đầu tư thông minh.",
            "Chuyển sang mô hình kinh doanh mới hoàn toàn."
        ],
        correctAnswer: 2
    },
    {
        id: 7,
        question: "Khi phát triển MVP cho một ứng dụng fintech, đâu là yếu tố quan trọng nhất cần tập trung?",
        options: [
            "Tính năng thanh toán cơ bản và bảo mật cao.",
            "Đầy đủ tính năng như các đối thủ cạnh tranh.",
            "Giao diện người dùng đẹp và hiện đại.",
            "Tích hợp nhiều phương thức thanh toán."
        ],
        correctAnswer: 0
    },
    {
        id: 8,
        question: "Khi startup gặp thất bại trong việc thâm nhập thị trường ban đầu, chiến lược pivot nào sau đây hiệu quả nhất?",
        options: [
            "Giảm giá sản phẩm để cạnh tranh.",
            "Phân tích dữ liệu người dùng, điều chỉnh giá trị cốt lõi và thị trường mục tiêu.",
            "Tăng cường đầu tư vào marketing.",
            "Thay đổi hoàn toàn mô hình kinh doanh."
        ],
        correctAnswer: 0
    },
    {
        id: 9,
        question: "Một startup SaaS B2B cần xây dựng chiến lược định giá, yếu tố nào quan trọng nhất?",
        options: [
            "Giá thấp hơn đối thủ cạnh tranh.",
            "Mô hình định giá dựa trên giá trị và ROI cho khách hàng doanh nghiệp.",
            "Các gói dịch vụ đa dạng.",
            "Chiến lược freemium để thu hút người dùng."
        ],
        correctAnswer: 0
    },
    {
        id: 10,
        question: "Trong quá trình phát triển sản phẩm công nghệ, startup nên áp dụng phương pháp quản lý dự án nào?",
        options: [
            "Agile Scrum với sprint ngắn và linh hoạt điều chỉnh theo phản hồi thị trường.",
            "Waterfall để đảm bảo chất lượng sản phẩm.",
            "Kanban để theo dõi tiến độ công việc.",
            "Phương pháp truyền thống với kế hoạch chi tiết từ đầu."
        ],
        correctAnswer: 0
    },
    {
        id: 11,
        question: "Một doanh nghiệp truyền thống muốn thực hiện chuyển đổi số toàn diện, đâu là chiến lược phù hợp nhất?",
        options: [
            "Thay thế toàn bộ hệ thống cũ bằng giải pháp số hiện đại.",
            "Áp dụng từng bước có lộ trình, ưu tiên các quy trình tạo giá trị cao và đào tạo nhân sự.",
            "Thuê đơn vị tư vấn bên ngoài thực hiện toàn bộ quá trình.",
            "Chờ đợi công nghệ mới ổn định hơn."
        ],
        correctAnswer: 0
    },
    {
        id: 12,
        question: "Trong chiến lược chuyển đổi số, việc xây dựng hạ tầng công nghệ nên tuân theo nguyên tắc nào?",
        options: [
            "Đầu tư toàn bộ vào hệ thống tự phát triển.",
            "Tích hợp các giải pháp đám mây với kiến trúc microservices linh hoạt và khả năng mở rộng.",
            "Sử dụng hoàn toàn các giải pháp có sẵn trên thị trường.",
            "Duy trì hệ thống legacy và nâng cấp dần dần."
        ],
        correctAnswer: 0
    },
    {
        id: 13,
        question: "Khi triển khai dự án IoT trong nhà máy thông minh, yếu tố nào cần được ưu tiên hàng đầu?",
        options: [
            "Số lượng thiết bị kết nối.",
            "Khả năng phân tích dữ liệu thời gian thực và tích hợp với hệ thống vận hành hiện có.",
            "Chi phí triển khai thấp.",
            "Giao diện người dùng thân thiện."
        ],
        correctAnswer: 0
    },
    {
        id: 14,
        question: "Doanh nghiệp cần xây dựng chiến lược đám mây (cloud strategy) như thế nào để tối ưu hóa chi phí và hiệu suất?",
        options: [
            "Sử dụng một nhà cung cấp đám mây duy nhất.",
            "Áp dụng mô hình đa đám mây (multi-cloud) với chiến lược phân bổ tải và dự phòng.",
            "Duy trì toàn bộ hệ thống on-premise.",
            "Thuê ngoài toàn bộ quản lý hạ tầng."
        ],
        correctAnswer: 0
    },
    {
        id: 15,
        question: "Trong dự án phân tích dữ liệu lớn (Big Data), chiến lược nào đảm bảo giá trị kinh doanh tốt nhất?",
        options: [
            "Thu thập càng nhiều dữ liệu càng tốt.",
            "Xác định rõ mục tiêu kinh doanh, thu thập và phân tích dữ liệu có chọn lọc để tạo insight.",
            "Đầu tư vào công nghệ phân tích tiên tiến nhất.",
            "Thuê đội ngũ data scientist đông đảo."
        ],
        correctAnswer: 0
    },
    {
        id: 16,
        question: "Khi triển khai AI trong doanh nghiệp, đâu là yếu tố then chốt để đảm bảo thành công?",
        options: [
            "Sử dụng các thuật toán AI tiên tiến nhất.",
            "Xây dựng lộ trình ứng dụng AI rõ ràng, tập trung vào các use case có giá trị cao và khả thi.",
            "Đầu tư lớn vào phần cứng chuyên dụng.",
            "Thuê các chuyên gia AI hàng đầu."
        ],
        correctAnswer: 0
    },
    {
        id: 17,
        question: "Trong quá trình số hóa quy trình kinh doanh, phương pháp nào hiệu quả nhất?",
        options: [
            "Số hóa toàn bộ quy trình hiện có.",
            "Tái thiết kế quy trình (BPR) kết hợp với công nghệ số để tối ưu hóa hiệu quả.",
            "Áp dụng RPA cho các quy trình thủ công.",
            "Thuê đơn vị tư vấn thực hiện."
        ],
        correctAnswer: 0
    },
    {
        id: 18,
        question: "Khi ứng dụng AI vào phân tích dự đoán (predictive analytics), yếu tố nào quyết định độ chính xác của mô hình?",
        options: [
            "Số lượng dữ liệu huấn luyện.",
            "Chất lượng và độ phù hợp của dữ liệu, kết hợp với việc lựa chọn và tinh chỉnh mô hình.",
            "Sức mạnh tính toán của hệ thống.",
            "Số lượng biến số trong mô hình."
        ],
        correctAnswer: 0
    },
    {
        id: 19,
        question: "Chiến lược nào hiệu quả nhất để phát triển nền tảng kinh doanh số (digital platform)?",
        options: [
            "Tập trung vào số lượng người dùng.",
            "Xây dựng hệ sinh thái với giá trị cốt lõi rõ ràng và chiến lược mở rộng network effect.",
            "Đầu tư mạnh vào marketing.",
            "Cung cấp nhiều tính năng đa dạng."
        ],
        correctAnswer: 0
    },
    {
        id: 20,
        question: "Khi triển khai blockchain trong doanh nghiệp, yếu tố nào cần được ưu tiên?",
        options: [
            "Sử dụng công nghệ blockchain mới nhất.",
            "Xác định rõ use case với giá trị thực tế và xây dựng POC có tính mở rộng.",
            "Tham gia nhiều consortium blockchain.",
            "Phát hành token riêng."
        ],
        correctAnswer: 0
    },
    {
        id: 21,
        question: "Trong bối cảnh một startup công nghệ đang phát triển sản phẩm AI, mô hình Lean Startup nên được áp dụng như thế nào để tối ưu hóa quá trình phát triển sản phẩm và thích nghi với thị trường?",
        options: [
            "Tập trung vào việc phát triển thuật toán AI hoàn chỉnh trước khi ra mắt thị trường để đảm bảo chất lượng sản phẩm.",
            "Ưu tiên tối ưu hóa chi phí vận hành và tìm kiếm đầu tư mạo hiểm ngay từ đầu.",
            "Xây dựng MVP với các tính năng AI cơ bản, thu thập phản hồi người dùng thực tế, và liên tục cải tiến dựa trên dữ liệu thị trường.",
            "Đầu tư mạnh vào marketing và xây dựng thương hiệu để tạo nhận diện trên thị trường AI."
        ],
        correctAnswer: 2
    },
    {
        id: 22,
        question: "Một startup fintech đang gặp khó khăn trong việc thâm nhập thị trường với giải pháp thanh toán B2B. Trong trường hợp này, chiến lược pivot nào sau đây là phù hợp nhất?",
        options: [
            "Chuyển đổi sang mô hình B2C với giải pháp ví điện tử cho người dùng cá nhân, tận dụng công nghệ và kinh nghiệm hiện có.",
            "Tăng cường đầu tư vào marketing và giảm phí dịch vụ để cạnh tranh.",
            "Mở rộng đội ngũ bán hàng và hỗ trợ khách hàng.",
            "Tìm kiếm thêm vốn đầu tư để duy trì mô hình hiện tại."
        ],
        correctAnswer: 0
    },
    {
        id: 23,
        question: "Trong bối cảnh phát triển một startup SaaS B2B, yếu tố nào sau đây KHÔNG phải là thách thức chính cần ưu tiên giải quyết trong giai đoạn đầu?",
        options: [
            "Xây dựng product-market fit và validating giá trị sản phẩm.",
            "Tối ưu hóa chi phí thu hút khách hàng (CAC) và vòng đời giá trị khách hàng (LTV).",
            "Thiết kế giao diện người dùng cao cấp và tính năng phụ trợ.",
            "Xây dựng quy trình onboarding và hỗ trợ khách hàng hiệu quả."
        ],
        correctAnswer: 2
    },
    {
        id: 24,
        question: "Một startup phát triển sản phẩm phần cứng IoT đang cân nhắc sử dụng crowdfunding. Trong trường hợp này, chiến lược crowdfunding nào sau đây là hiệu quả nhất?",
        options: [
            "Sử dụng nền tảng Kickstarter với chiến lược pre-order và early bird rewards để validate nhu cầu thị trường và huy động vốn sản xuất.",
            "Tạo chiến dịch vay vốn cộng đồng với lãi suất hấp dẫn.",
            "Bán cổ phần nhỏ lẻ cho nhà đầu tư cá nhân qua nền tảng equity crowdfunding.",
            "Phát hành token riêng và huy động vốn qua ICO."
        ],
        correctAnswer: 0
    },
    {
        id: 25,
        question: "Một doanh nghiệp sản xuất đang xây dựng chiến lược nhà máy thông minh dựa trên công nghệ 5G. Đâu là cách tiếp cận tối ưu để tận dụng tiềm năng của 5G trong chuyển đổi số?",
        options: [
            "Triển khai mạng 5G riêng (private 5G) kết hợp với edge computing để tối ưu hóa độ trễ và bảo mật cho ứng dụng IoT trong sản xuất.",
            "Sử dụng mạng 5G công cộng để giảm chi phí đầu tư hạ tầng.",
            "Tập trung vào việc nâng cấp thiết bị đầu cuối tương thích 5G.",
            "Ưu tiên phát triển ứng dụng di động 5G cho nhân viên."
        ],
        correctAnswer: 0
    },
    {
        id: 26,
        question: "Một doanh nghiệp logistics đang xây dựng hệ thống quản lý kho thông minh. Đâu là giải pháp IoT tối ưu nhất để nâng cao hiệu quả vận hành?",
        options: [
            "Triển khai hệ thống tích hợp RFID, cảm biến môi trường, và AGV (Automated Guided Vehicles) được điều khiển bởi AI để tự động hóa toàn bộ quy trình từ nhập kho đến xuất kho.",
            "Sử dụng phần mềm quản lý kho trên cloud với tính năng báo cáo real-time.",
            "Lắp đặt camera giám sát và hệ thống bảo mật.",
            "Triển khai hệ thống mã vạch và máy quét cầm tay."
        ],
        correctAnswer: 0
    },
    {
        id: 27,
        question: "Một công ty chuỗi cung ứng đang xem xét áp dụng blockchain để tăng tính minh bạch và truy xuất nguồn gốc. Đâu là chiến lược triển khai blockchain phù hợp nhất?",
        options: [
            "Xây dựng private blockchain consortium với các đối tác chính, tích hợp smart contracts để tự động hóa quy trình xác thực và thanh toán, đồng thời đảm bảo khả năng mở rộng và tương tác với các hệ thống legacy.",
            "Sử dụng public blockchain để tối đa hóa tính minh bạch.",
            "Triển khai nhanh một giải pháp blockchain có sẵn trên thị trường.",
            "Phát triển cryptocurrency riêng cho hệ thống thanh toán."
        ],
        correctAnswer: 0
    },
    {
        id: 28,
        question: "Một doanh nghiệp bán lẻ truyền thống muốn chuyển đổi sang mô hình omnichannel e-commerce. Chiến lược nào sau đây sẽ mang lại hiệu quả tối ưu?",
        options: [
            "Tập trung xây dựng website bán hàng và ứng dụng di động riêng biệt.",
            "Phát triển hệ sinh thái tích hợp online-to-offline (O2O) với hệ thống quản lý đơn hàng thống nhất, tích hợp dữ liệu khách hàng đa kênh, và trải nghiệm mua sắm liền mạch giữa các kênh bán hàng.",
            "Đầu tư vào nền tảng marketplace của bên thứ ba.",
            "Chuyển hoàn toàn sang mô hình bán hàng trực tuyến."
        ],
        correctAnswer: 0
    },
    {
        id: 29,
        question: "Một startup B2B SaaS cần xây dựng chiến lược digital marketing với ngân sách hạn chế. Phương pháp nào sau đây sẽ mang lại ROI tốt nhất?",
        options: [
            "Triển khai chiến lược content marketing tích hợp với marketing tự động hóa, tập trung vào SEO, lead nurturing, và account-based marketing (ABM) để tối ưu hóa customer acquisition cost.",
            "Đầu tư mạnh vào quảng cáo Google Ads và social media.",
            "Thuê agency marketing chuyên nghiệp.",
            "Tập trung vào email marketing và cold calling."
        ],
        correctAnswer: 0
    },
    {
        id: 30,
        question: "Một công ty thương mại điện tử cần xây dựng hệ thống phân tích dữ liệu để tối ưu hóa hiệu quả kinh doanh. Giải pháp analytics nào sau đây là phù hợp nhất?",
        options: [
            "Triển khai hệ thống phân tích đa chiều tích hợp Google Analytics 4, BigQuery, và công cụ BI để theo dõi customer journey, dự đoán hành vi mua hàng, và tối ưu hóa conversion rate.",
            "Sử dụng các công cụ báo cáo cơ bản như Google Analytics Universal.",
            "Thuê đơn vị tư vấn phân tích dữ liệu bên ngoài.",
            "Phát triển hệ thống phân tích riêng từ đầu."
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
        correctAnswer: 0
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
        correctAnswer: 0
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