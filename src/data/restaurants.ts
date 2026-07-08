import { Restaurant } from '../types';
import phoBatDanThumb from '../assets/images/pho_bat_dan_1783474865349.jpg';

const michelinArticle = `
<p>Bếp trưởng người Hàn Quốc nói thêm sẽ không ngừng học hỏi về con người, văn hóa, nguyên liệu Việt để có thể giới thiệu ẩm thực hai nước tới thực khách nhiều hơn. Trước khi đến Việt Nam vào năm 2020, Joon Huyk từng có thời gian dài làm việc tại Nhật Bản, Canada và Philippines. Anh cho biết nhận sao Michelin không chỉ là ước mơ cá nhân mà còn của rất nhiều đầu bếp trên thế giới. Với Joon Hyuk, lần nhận sao này còn có ý nghĩa đặc biệt hơn nữa khi anh là đầu bếp Hàn Quốc và được vinh danh tại Việt Nam.</p>
<p>"Ngoài vui mừng và hạnh phúc, tôi cũng cảm thấy có trách nhiệm hơn trong việc giới thiệu văn hóa, ẩm thực giao thoa giữa hai nền văn hóa", chef Joon Hyuk nói.</p>
<p>Các loại đồ uống có cồn tại nhà hàng gồm vang châu Âu cùng các loại đồ uống truyền thống của Hàn Quốc. Mai Bích Ngọc, 27 tuổi, nhân viên của Onvit cũng được Michelin vinh danh ở giải thưởng Chuyên gia nếm rượu tối 4/6. Ngọc từng có ba năm du học tại Thụy Sĩ về ngành khách sạn và kinh nghiệm trong việc thưởng thức, nghiên cứu các loại đồ uống. Bích Ngọc được các chuyên gia Michelin đánh giá "nổi bật với màn kết hợp thức ăn, đồ uống đa văn hóa, từ rượu vang đến soju nấm thông".</p>
<p>Món bánh ngó sen cũng là ẩm thực được nhiều thực khách yêu thích, nguyên liệu gồm ngó sen, cá chim vàng, xốt kem hạt thông và củ cần tây.</p>
<p>Trên ảnh là món salad lạnh gồm bắp cải tím, ớt chuông, cỏ ba lá, mầm dền, bạc hà chanh cùng sò huyết, ốc hương, xốt mù tạt. Trên Google review, nhà hàng được chấm 4,5 sao với hàng chục khách để lại nhận xét. Một số khen không gian riêng tư, rộng rãi, view đẹp, vừa thưởng thức ẩm thực vừa ngắm cảnh thành phố từ trên cao.</p>
<p>Năm 2026, Michelin vinh danh hai nhà hàng mới Onvit và Upstairs, nâng tổng số cơ sở sở hữu một sao tại Việt Nam lên con số 11. Các nhà hàng được Michelin lựa chọn năm nay được nhiều người kỳ vọng sẽ góp phần nâng cao vị thế nền ẩm thực và du lịch Việt trên bản đồ quốc tế.</p>
`;

const baseRestaurants: Restaurant[] = [
  {
    id: '12345',
    name: 'Mì Quảng Bà Mua',
    commonName: 'Bà Mua',
    province: 'Đà Nẵng',
    area: 'Hải Châu',
    ward: 'Phước Ninh',
    address: '19-21 Trần Bình Trọng, Phường Phước Ninh',
    thumbnail: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=800'
    ],
    lead: 'Thương hiệu mì Quảng lâu đời và nổi tiếng bậc nhất Đà Nẵng, điểm đến quen thuộc của du khách.',
    mapLink: 'https://maps.google.com',
    signatureDishes: ['Mì quảng gà', 'Mì quảng ếch', 'Mì quảng tôm thịt', 'Bánh tráng cuốn thịt heo'],
    cuisineType: 'Bình dân',
    regionalFlavor: 'Miền Trung',
    priceSegment: ['Bình dân', 'Trung cấp'],
    amenities: ['Có chỗ đỗ ô tô', 'Có điều hòa', 'Phù hợp trẻ em'],
    awards: ['Top Review VnE'],
    rating: 4.5,
    reviewCount: 1250,
    articleContent: michelinArticle,
  },
  {
    id: '12346',
    name: 'Mì Quảng Ếch Bếp Trang',
    province: 'Đà Nẵng',
    area: 'Hải Châu',
    ward: 'Hải Châu 1',
    address: '441 Ông Ích Khiêm, Phường Hải Châu 1',
    thumbnail: 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=800'
    ],
    lead: 'Nổi tiếng với món mì quảng ếch độc đáo, bày trí đẹp mắt trên mẹt tre truyền thống.',
    signatureDishes: ['Mì quảng ếch', 'Mì quảng sườn non'],
    cuisineType: 'Sang trọng',
    regionalFlavor: 'Miền Trung',
    priceSegment: ['Trung cấp'],
    amenities: ['Có điều hòa', 'Phù hợp trẻ em', 'Có phòng riêng'],
    awards: ['Michelin Guide'],
    michelinGuide: ['Selected'],
    rating: 4.2,
    reviewCount: 890,
  },
  {
    id: '67890',
    name: 'Lẩu Bò Ba Toa - Quán Gỗ',
    commonName: 'Quán Gỗ',
    province: 'Lâm Đồng',
    area: 'Đà Lạt',
    ward: 'Phường 1',
    address: '1/29 Hoàng Diệu, Phường 1',
    thumbnail: 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=800'
    ],
    lead: 'Quán lẩu bò huyền thoại tại Đà Lạt, luôn tấp nập khách du lịch và người dân địa phương.',
    signatureDishes: ['Lẩu bò', 'Bò nướng'],
    cuisineType: 'Bình dân',
    regionalFlavor: 'Tây Nguyên',
    priceSegment: ['Bình dân'],
    amenities: ['Bãi để xe máy'],
    awards: ['Quán ăn lâu đời'],
    rating: 4.7,
    reviewCount: 3200,
    articleContent: michelinArticle,
  },
  {
    id: '11223',
    name: 'Bánh Xèo Chảo Mực Nhảy',
    province: 'Khánh Hòa',
    area: 'Nha Trang',
    ward: 'Lộc Thọ',
    address: '97 Hoàng Diệu, Phường Lộc Thọ',
    thumbnail: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800'
    ],
    lead: 'Bánh xèo vàng rụm, nhân mực nhảy tươi rói mang đậm hương vị biển cả Nha Trang.',
    signatureDishes: ['Bánh xèo mực', 'Bánh xèo tôm', 'Nem nướng'],
    cuisineType: 'Bình dân',
    regionalFlavor: 'Miền Trung',
    priceSegment: ['Bình dân'],
    amenities: ['Vỉa hè', 'Phù hợp ăn đêm'],
    awards: [],
    rating: 4.3,
    reviewCount: 650,
  },
  {
    id: '99887',
    name: 'Phở Bát Đàn',
    province: 'Hà Nội',
    area: 'Hoàn Kiếm',
    ward: 'Cửa Đông',
    address: '49 Bát Đàn, Phường Cửa Đông',
    thumbnail: phoBatDanThumb,
    images: [
      phoBatDanThumb
    ],
    lead: 'Quán phở truyền thống danh tiếng, thực khách xếp hàng từ sáng sớm để thưởng thức.',
    signatureDishes: ['Phở tái', 'Phở nạm', 'Phở gầu'],
    cuisineType: 'Bình dân',
    regionalFlavor: 'Miền Bắc',
    priceSegment: ['Bình dân'],
    amenities: [],
    awards: ['Quán ăn lâu đời', 'Michelin Guide'],
    michelinGuide: ['Bib Gourmand'],
    rating: 4.6,
    reviewCount: 4100,
  },
  {
    id: '55667',
    name: 'Cơm Gà Bà Buội',
    province: 'Quảng Nam',
    area: 'Hội An',
    ward: 'Minh An',
    address: '22 Phan Chu Trinh, Phường Minh An',
    thumbnail: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&q=80&w=800'
    ],
    lead: 'Cơm gà nổi tiếng nhất Hội An với hạt cơm tơi xốp, thịt gà thả vườn dai ngon.',
    signatureDishes: ['Cơm gà xé', 'Cơm gà chặt', 'Gỏi gà'],
    cuisineType: 'Bình dân',
    regionalFlavor: 'Miền Trung',
    priceSegment: ['Bình dân', 'Trung cấp'],
    amenities: ['Phù hợp gia đình'],
    awards: ['Quán ăn lâu đời'],
    rating: 4.4,
    reviewCount: 2800,
    articleContent: michelinArticle,
  },
  {
    id: '33445',
    name: 'Anan Saigon',
    province: 'TP.HCM',
    area: 'Quận 1',
    ward: 'Bến Nghé',
    address: '89 Tôn Thất Đạm, Phường Bến Nghé',
    thumbnail: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800'
    ],
    lead: 'Nhà hàng ẩm thức Việt Nam hiện đại, tiên phong trong việc nâng tầm món ăn đường phố.',
    signatureDishes: ['Bánh mì 100 đô', 'Taco bánh xèo'],
    cuisineType: 'Sang trọng',
    regionalFlavor: 'Miền Nam',
    priceSegment: ['Cao cấp'],
    amenities: ['Có điều hòa', 'Thanh toán thẻ', 'Có quầy bar'],
    awards: ['Michelin Guide'],
    michelinGuide: ['Một sao Michelin'],
    rating: 4.8,
    reviewCount: 950,
  },
  {
    id: '10101',
    name: 'Quầy Bò Bía Ngọt Hồ Tây',
    province: 'Hà Nội',
    area: 'Tây Hồ',
    ward: 'Thụy Khuê',
    address: 'Đường Thanh Niên',
    thumbnail: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800'
    ],
    lead: 'Hàng ngày, từ 16h, một góc vỉa hè đường ven hồ Tây đông nghịt khách chờ mua bò bía ngọt với giá 5.000 đồng một chiếc.',
    signatureDishes: ['Bò bía ngọt'],
    cuisineType: 'Bình dân',
    regionalFlavor: 'Miền Bắc',
    priceSegment: ['Bình dân'],
    amenities: ['Vỉa hè'],
    awards: [],
    rating: 4.5,
    reviewCount: 1500,
    articleContent: `
<h1 class="text-3xl md:text-4xl font-bold text-vne-title mb-4 leading-tight">Quầy bò bía Hà Nội khách phải xếp hàng chờ mua</h1>
<p class="text-[16px] text-vne-gray mb-6 leading-relaxed">
  Hàng ngày, từ 16h, một góc vỉa hè đường ven hồ Tây đông nghịt khách chờ mua bò bía ngọt với giá 5.000 đồng một chiếc.
</p>
<figure class="mb-6">
  <img src="https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=1200" alt="Quầy bò bía" class="w-full rounded-[2px]" />
  <figcaption class="text-[13px] text-vne-gray mt-2 text-center bg-gray-50 py-2">
    Quầy bò bía nhỏ ven hồ Tây lúc nào cũng tấp nập khách (Ảnh minh họa).
  </figcaption>
</figure>
<p class="text-[18px] text-vne-text leading-relaxed mb-4">
  Khoảng 10 năm nay, người dân đi qua đoạn giao cắt giữa phố Thanh Niên và Nguyễn Đình Thi (quận Tây Hồ) vào mỗi buổi chiều lại quen thuộc với hình ảnh một chiếc xe đạp bán bò bía ngọt, xung quanh khách đứng đợi kín vỉa hè.
</p>
<p class="text-[18px] text-vne-text leading-relaxed mb-4">
  Chủ quán là chị Nguyễn Thị Hải (45 tuổi, quê Nam Định). Chị cho biết mỗi ngày bắt đầu dọn hàng từ 15h và bán liên tục đến 23h. Quầy hàng chỉ là một chiếc xe đạp thồ với tủ kính nhỏ, bên trong đựng bánh tráng, thanh kẹo mạch nha, dừa nạo và chút vừng đen.
</p>
<p class="text-[18px] text-vne-text leading-relaxed mb-4">
  Bò bía ngọt là món ăn vặt gắn liền với tuổi thơ của nhiều thế hệ. Chiếc bánh được cuốn nhỏ nhắn bằng hai lớp bánh tráng mỏng, dai. Bên trong là phần nhân ngọt ngào gồm thanh kẹo mạch nha giòn tan, dừa nạo tươi béo ngậy và chút vừng đen rang thơm phức. Khi ăn, thực khách sẽ cảm nhận được sự hòa quyện hoàn hảo giữa độ dai của vỏ, độ giòn rụm của kẹo và vị béo của dừa.
</p>
<figure class="mb-6">
  <img src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=1200" alt="Cuốn bò bía" class="w-full rounded-[2px]" />
  <figcaption class="text-[13px] text-vne-gray mt-2 text-center bg-gray-50 py-2">
    Nguyên liệu đơn giản nhưng tạo nên sức hút khó cưỡng (Ảnh minh họa).
  </figcaption>
</figure>
<p class="text-[18px] text-vne-text leading-relaxed mb-4">
  Dù hiện nay có vô vàn món ăn vặt hiện đại, bò bía ngọt ven hồ Tây vẫn giữ được sức hút riêng. Chị Hải chia sẻ, mỗi ngày chị bán được từ 1.000 đến 1.500 chiếc, ngày lễ tết, cuối tuần có thể lên tới 2.000 chiếc. Khách hàng đa phần là giới trẻ, học sinh, sinh viên và cả những người lớn tuổi muốn tìm lại hương vị tuổi thơ.
</p>
<p class="text-[18px] text-vne-text leading-relaxed mb-4">
  Với mức giá chỉ 5.000 đồng/chiếc, đây thực sự là món ăn vặt lý tưởng để nhâm nhi khi dạo bước ven hồ Tây lộng gió. Tuy nhiên, do khách đông, bạn nên chuẩn bị tinh thần phải chờ đợi từ 15-20 phút mới đến lượt mình.
</p>
    `
  },
  {
    id: '33446',
    name: 'Bếp Mẹ Ỉn - Lê Thánh Tôn',
    province: 'TP.HCM',
    area: 'Quận 1',
    ward: 'Bến Thành',
    address: '136/9 Lê Thánh Tôn, Phường Bến Thành',
    thumbnail: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800',
    images: ['https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800'],
    lead: 'Quán ăn nổi tiếng với các món cơm gia đình thuần Việt phong cách truyền thống ấm cúng.',
    signatureDishes: ['Bánh xèo', 'Cơm chiên trái dừa', 'Thịt kho tộ'],
    cuisineType: 'Bình dân',
    regionalFlavor: 'Miền Nam',
    priceSegment: ['Bình dân', 'Trung cấp'],
    amenities: ['Có điều hòa', 'Phù hợp gia đình'],
    awards: ['Michelin Guide'],
    michelinGuide: ['Bib Gourmand'],
    rating: 4.5,
    reviewCount: 1800,
  },
  {
    id: '99888',
    name: 'Gia Restaurant',
    province: 'Hà Nội',
    area: 'Đống Đa',
    ward: 'Văn Miếu',
    address: '61 Quốc Tử Giám, Phường Văn Miếu',
    thumbnail: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800',
    images: ['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800'],
    lead: 'Nhà hàng fine dining lấy cảm hứng từ những ký ức tuổi thơ và văn hóa ẩm thực truyền thống Việt Nam.',
    signatureDishes: ['Thực đơn nếm thử (Tasting Menu)'],
    cuisineType: 'Sang trọng',
    regionalFlavor: 'Miền Bắc',
    priceSegment: ['Cao cấp'],
    amenities: ['Có điều hòa', 'Có phòng riêng', 'Thanh toán thẻ'],
    awards: ['Michelin Guide'],
    michelinGuide: ['Một sao Michelin'],
    rating: 4.9,
    reviewCount: 350,
  }
];

interface DishConfig {
  dish: string;
  province: string;
  area: string;
  regionalFlavor: string;
  image: string;
  signatureDishes: string[];
  names: string[];
  addresses: string[];
  leads: string[];
}

const dishConfigs: DishConfig[] = [
  {
    dish: 'Phở',
    province: 'Hà Nội',
    area: 'Hoàn Kiếm',
    regionalFlavor: 'Miền Bắc',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=600',
    signatureDishes: ['Phở tái chín', 'Phở tái nạm', 'Phở gà ta'],
    names: [
      'Phở Thìn Lò Đúc', 'Phở Sướng Trung Yên', 'Phở Tư Lùn Hai Bà Trưng',
      'Phở Gà Nguyệt Phủ Doãn', 'Phở Lâm Hàng Vải', 'Phở Cường Hàng Muối',
      'Phở Vui Hàng Giầy', 'Phở Gà Châm Yên Ninh'
    ],
    addresses: [
      '13 Lò Đúc, Quận Hai Bà Trưng', '24 Ngõ Trung Yên, Đinh Liệt, Quận Hoàn Kiếm', '23C Hai Bà Trưng, Quận Hoàn Kiếm',
      '5 Phủ Doãn, Quận Hoàn Kiếm', '7 Hàng Vải, Quận Hoàn Kiếm', '23 Hàng Muối, Quận Hoàn Kiếm',
      '25 Hàng Giầy, Quận Hoàn Kiếm', '64-68 Yên Ninh, Quận Ba Đình'
    ],
    leads: [
      'Nổi danh với món phở tái lăn béo ngậy, hành lá phủ xanh rì thơm phức khắp một vùng.',
      'Quán phở lâu đời ẩn mình trong ngõ nhỏ, nổi tiếng nước dùng thanh ngọt tự nhiên hảo hạng.',
      'Phở Tư Lùn mang hương vị đậm đà truyền thống khó quên của Hà Nội xưa cũ.',
      'Phở gà nổi tiếng được nhiều thực khách ưu thích bởi thịt dai, da giòn, nước dùng ngọt lịm.',
      'Địa điểm nổi tiếng phục vụ phở bò lõi rùa gầu giòn thơm lừng đặc trưng phố cổ.',
      'Phở Cường ghi điểm bởi nước dùng đậm đà, thịt bò tươi ngon thái mỏng mềm tan.',
      'Quán phở mang cái tên tràn ngập niềm vui và luôn tấp nập thực khách ra vào mỗi sáng.',
      'Thương hiệu phở gà cao cấp trứ danh với đùi gà xé thịt chắc nịch và lòng mề hấp dẫn.'
    ]
  },
  {
    dish: 'Mì Quảng',
    province: 'Đà Nẵng',
    area: 'Hải Châu',
    regionalFlavor: 'Miền Trung',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=600',
    signatureDishes: ['Mì Quảng tôm thịt', 'Mì Quảng ếch', 'Mì Quảng gà ta'],
    names: [
      'Mì Quảng Bà Vị', 'Mì Quảng 1A Hải Phòng', 'Mì Quảng Giao Thủy',
      'Mì Quảng Quê Ngọc Chi', 'Mì Quảng Sông Trà', 'Mì Quảng Bà Mua Nguyễn Chí Thanh',
      'Mì Quảng Quê Tôi', 'Mì Quảng Ếch Trang Lê Hồng Phong'
    ],
    addresses: [
      '166 Lê Đình Dương, Quận Hải Châu', '1A Hải Phòng, Quận Hải Châu', '20 Lê Thanh Nghị, Quận Hải Châu',
      '32 Đống Đa, Quận Hải Châu', '120 Núi Thành, Quận Hải Châu', '95A Nguyễn Chí Thanh, Quận Hải Châu',
      '24 Ngô Gia Tự, Quận Hải Châu', '24 Lê Hồng Phong, Quận Hải Châu'
    ],
    leads: [
      'Thương hiệu mì Quảng gia truyền nổi tiếng với nước nhân đậm đà, tôm thịt thấm vị.',
      'Điểm hẹn ẩm thực quen thuộc phục vụ mì Quảng sợi trắng truyền thống dẻo dai và thơm nồng.',
      'Mì Quảng Giao Thủy đem lại hương vị mộc mạc chuẩn xứ Quảng giữa lòng thành phố Đà Nẵng.',
      'Nơi gìn giữ tinh hoa mì Quảng quê hương với rau sống Trà Quế tươi ngon mơn mởn.',
      'Thưởng thức mì Quảng cá lóc thơm ngon đặc biệt mang phong vị đậm đà của dòng sông Trà.',
      'Chi nhánh nổi tiếng của hệ thống Bà Mua với không gian rộng rãi và menu đa dạng cực kỳ.',
      'Mì Quảng Quê Tôi giữ nguyên nét ẩm thực bản xứ bình dị cùng sợi mì tráng tay dày mịn.',
      'Nổi danh với món mì Quảng ếch được bày trí vô cùng bắt mắt trên mẹt tre truyền thống.'
    ]
  },
  {
    dish: 'Bánh xèo',
    province: 'Khánh Hòa',
    area: 'Nha Trang',
    regionalFlavor: 'Miền Trung',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=600',
    signatureDishes: ['Bánh xèo mực sữa', 'Bánh xèo tôm mực', 'Bánh xèo chảo hải sản'],
    names: [
      'Bánh xèo Chảo Tô Hiến Thành', 'Bánh xèo Mực Bạch Đằng', 'Bánh xèo Cô Tám Tháp Bà',
      'Bánh xèo 31 Ngô Đức Kế', 'Bánh xèo chảo sườn Nha Trang', 'Bánh xèo Cô Hai Lê Lợi',
      'Bánh xèo Chảo 85 Hoàng Văn Thụ', 'Bánh xèo Hải Sản Tháp Bà'
    ],
    addresses: [
      '85 Tô Hiến Thành, Tân Lập', '15 Bạch Đằng, Phước Tiến', '6 Tháp Bà, Vĩnh Thọ',
      '31 Ngô Đức Kế, Tân Lập', '20 sườn đồi Nha Trang', '12 Lê Lợi, Xương Huân',
      '85 Hoàng Văn Thụ, Vạn Thạnh', '102 Tháp Bà, Vĩnh Thọ'
    ],
    leads: [
      'Bánh xèo chảo giòn rụm với phần nhân mực nhảy tươi ngon ngọt lịm đặc sắc vùng biển.',
      'Nổi bật với những chiếc bánh xèo chứa đầy mực sữa tươi rói, ăn kèm nước chấm chua ngọt cực cuốn.',
      'Địa chỉ ăn bánh xèo mực giá bình dân được lòng đông đảo sinh viên và người dân địa phương.',
      'Quán bánh xèo gia truyền nổi tiếng Nha Trang với lớp vỏ mỏng vàng ươm, thơm mùi cốt dừa.',
      'Sự kết hợp độc đáo giữa sườn heo ninh mềm và vỏ bánh xèo giòn tan thơm ngon lạ miệng.',
      'Bánh xèo đổ bằng khuôn đất sét nung truyền thống ít dầu mỡ, thanh đạm và cực kỳ thơm ngon.',
      'Quán bánh xèo chảo lúc nào cũng đông đúc thực khách chờ đợi thưởng thức từng chiếc bánh nóng hổi.',
      'Địa điểm lý tưởng để thưởng thức combo bánh xèo hải sản tôm mực mực ghẹ tươi rói ngọt lịm.'
    ]
  },
  {
    dish: 'Bún bò',
    province: 'Thừa Thiên Huế',
    area: 'Huế',
    regionalFlavor: 'Miền Trung',
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=600',
    signatureDishes: ['Bún bò nạm chả', 'Bún bò giò heo', 'Bún bò đặc biệt'],
    names: [
      'Bún bò Huế Mụ Rơi', 'Bún bò Huế O Ty', 'Bún bò Huế O Cúc',
      'Bún bò Huế O Hòa', 'Bún bò Mỹ Tâm', 'Bún bò Huế O Cẩm',
      'Bún bò Huế Bà Phụng', 'Bún bò Huế 17 Lý Thường Kiệt'
    ],
    addresses: [
      '40 Nguyễn Chí Diểu, Thuận Thành', '5 Lịch Đợi, Phường Đúc', '14 Lệ Ninh, Phường Đúc',
      '162 Mai Thúc Loan, Thuận Thành', '5 Trần Cao Vân, Vĩnh Ninh', '38 Trần Cao Vân, Vĩnh Ninh',
      '24 Nguyễn Khuyến, Phú Nhuận', '17 Lý Thường Kiệt, Phú Nhuận'
    ],
    leads: [
      'Quán bún bò trứ danh của mụ Rơi nổi bật với viên chả cua to tròn béo ngậy vàng ươm.',
      'Bún bò O Ty mang đậm phong vị Huế xưa với nước dùng dậy mùi mắm ruốc thanh tao ngọt mát.',
      'Địa điểm bún bò bình dân ngon bổ rẻ lúc nào cũng hết hàng sớm từ tờ mờ sáng.',
      'Quán bún bò O Hòa đông nghẹt khách nhờ thớ thịt bò mềm mại cùng móng giò sần sật béo ngậy.',
      'Địa điểm ăn đêm bún bò nổi tiếng nhất Huế, mở cửa phục vụ thực khách từ tối muộn đến rạng sáng.',
      'Bún bò O Cẩm nổi tiếng với sợi bún to tròn dai mượt cùng nước dùng đậm đà chuẩn vị cung đình.',
      'Thương hiệu bún bò gia truyền lâu năm được đông đảo người dân Huế và khách du lịch yêu mến.',
      'Địa chỉ quen thuộc ngay trung tâm thành phố Huế luôn tấp nập thực khách ra vào mỗi ngày.'
    ]
  },
  {
    dish: 'Cơm gà',
    province: 'Quảng Nam',
    area: 'Hội An',
    regionalFlavor: 'Miền Trung',
    image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&q=80&w=600',
    signatureDishes: ['Cơm gà xé', 'Cơm gà đùi chặt', 'Lòng mề gà xào'],
    names: [
      'Cơm gà Ty Hội An', 'Cơm gà Hương Hội An', 'Cơm gà Long Hội An',
      'Cơm gà Nga Hội An', 'Cơm gà Thuận Hội An', 'Cơm gà Cô Mẫn Hội An',
      'Cơm gà Bà Lắm Hội An', 'Cơm gà Cô Dung'
    ],
    addresses: [
      '25-27 Phan Chu Trinh, Minh An', '56 Lê Lợi, Minh An', '53/16 Phan Chu Trinh, Minh An',
      '8 Phan Chu Trinh, Minh An', '17/4 Hai Bà Trưng, Minh An', 'Chợ Hội An, Trần Phú',
      '12 Thích Quảng Đức, Cẩm Phô', '31 Lý Thường Kiệt, Sơn Phong'
    ],
    leads: [
      'Cơm gà Ty ghi điểm bởi đĩa cơm gà vàng óng thơm dẻo cùng nước sốt lòng đậm đà.',
      'Cơm gà Hương nức tiếng phố cổ nhờ thịt gà thả vườn chắc ngọt dai giòn tự nhiên hảo hạng.',
      'Quán cơm gà nằm sâu trong ngõ nhỏ nhưng luôn chật kín bàn nhờ hương vị gia truyền trứ danh.',
      'Cơm gà Nga có nước sốt đậm đà cùng đĩa gỏi gà hành tây chua ngọt ăn kèm cực kỳ chống ngấy.',
      'Hương vị cơm gà tinh tế mộc mạc đúng điệu Hội An đem lại trải nghiệm ẩm thực trọn vẹn.',
      'Góc cơm gà nhỏ bình dân trong chợ Hội An nức tiếng với đĩa cơm đầy đặn cực kỳ chất lượng.',
      'Thương hiệu lâu đời được truyền tai nhau bởi giới sành ăn khi tìm kiếm hương vị gốc Hội An.',
      'Cơm gà Cô Dung mang phong vị đậm đà miền Trung ấm áp từ sự chăm chút tỉ mỉ từng đĩa cơm.'
    ]
  },
  {
    dish: 'Bún chả',
    province: 'Hà Nội',
    area: 'Hoàn Kiếm',
    regionalFlavor: 'Miền Bắc',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600',
    signatureDishes: ['Bún chả nem cua bể', 'Bún chả nướng que tre', 'Bún chả đặc biệt'],
    names: [
      'Bún chả Hương Liên (Obama)', 'Bún chả Đắc Kim Hàng Mành', 'Bún chả Sinh Từ Phố Cổ',
      'Bún chả Cửa Đông', 'Bún chả Tuyết Hàng Than', 'Bún chả Nem Cua Bể Đinh Tiên Hoàng',
      'Bún chả ngõ Đồng Xuân', 'Bún chả que tre Bạch Mai'
    ],
    addresses: [
      '24 Lê Văn Hưu, Quận Hai Bà Trưng', '1 Hàng Mành, Quận Hoàn Kiếm', '31C Lý Quốc Sư, Quận Hoàn Kiếm',
      '21 Đường Thành, Quận Hoàn Kiếm', '34 Hàng Than, Quận Ba Đình', '5 Đinh Tiên Hoàng, Quận Hoàn Kiếm',
      'Ngõ Đồng Xuân, Quận Hoàn Kiếm', 'Ngõ 213 Bạch Mai, Quận Hai Bà Trưng'
    ],
    leads: [
      'Quán bún chả nổi danh toàn cầu sau sự kiện Tổng thống Mỹ Barack Obama ghé thăm và thưởng thức.',
      'Thương hiệu bún chả Hàng Mành trứ danh với phần chả băm nướng cháy cạnh thơm lừng ngào ngạt.',
      'Hệ thống bún chả Sinh Từ lâu năm nức tiếng đất Hà Thành nhờ nước mắm pha chế vô cùng tinh tế.',
      'Bún chả Cửa Đông thu hút thực khách bằng chả kẹp lá xương sông nướng thơm bùi đặc trưng.',
      'Nổi tiếng với đĩa bún chả đầy đặn, thịt nướng mềm mại thấm đẫm mật ong rừng ngọt ngào.',
      'Thưởng thức bún chả cùng chiếc nem cua bể giòn rụm béo ngậy đầy ụ nhân tôm cua bể tươi rói.',
      'Quán bún chả dân dã nằm sâu trong ngõ chợ luôn tấp nập khách nhờ hương vị bình dân đúng điệu.',
      'Sự cầu kỳ của món bún chả que tre kẹp lá lốt được nướng trên than hoa đượm hồng thơm phức.'
    ]
  },
  {
    dish: 'Cơm tấm',
    province: 'TP.HCM',
    area: 'Quận 1',
    regionalFlavor: 'Miền Nam',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=600',
    signatureDishes: ['Cơm tấm sườn bì chả', 'Cơm tấm đùi gà nướng', 'Cơm tấm sườn ốp la'],
    names: [
      'Cơm tấm Ba Ghiền', 'Cơm tấm Thuận Kiều Quận 1', 'Cơm tấm Kiều Giang',
      'Cơm tấm Bụi Sài Gòn', 'Cơm tấm Cali Lê Thánh Tôn', 'Cơm tấm sườn bì chả Nguyễn Huệ',
      'Cơm tấm Nhớ Sài Gòn', 'Cơm tấm bãi rác Quận 4'
    ],
    addresses: [
      '84 Đặng Văn Ngữ, Quận Phú Nhuận', '114 Yersin, Quận 1', '192 Trần Não, Quận 2',
      '100 Thạch Thị Thanh, Quận 1', '236 Lê Thánh Tôn, Quận 1', '135 Nguyễn Huệ, Quận 1',
      '128 Võ Văn Tần, Quận 3', '73 Lê Văn Linh, Quận 4'
    ],
    leads: [
      'Quán cơm tấm trứ danh sở hữu miếng sườn nướng khổng lồ che lấp cả đĩa cơm thơm dẻo.',
      'Thương hiệu cơm tấm lâu đời gắn liền with người dân Sài Gòn nhờ hương vị nước mắm kẹo ngọt ngào.',
      'Cơm tấm Kiều Giang sang trọng tinh tế đem lại đĩa cơm chất lượng sạch sẽ chuẩn vệ sinh.',
      'Hương vị cơm tấm Bụi dân dã cuốn hút nhờ sườn nướng mật ong mềm mọng thơm phưng phức.',
      'Hệ thống cơm tấm Cali hiện đại tinh tế, điểm đến lý tưởng cho dân văn phòng và gia đình trẻ.',
      'Cơm tấm sườn bì chả nằm ngay đại lộ Nguyễn Huệ luôn nhộn nhịp thực khách trong và ngoài nước.',
      'Cơm tấm Nhớ gợi lên hương vị nguyên bản xưa cũ của Sài Gòn đầy ắp kỷ niệm hoài niệm.',
      'Biệt danh thú vị của quán cơm tấm nổi tiếng chất lượng bậc nhất với món sườn cốt lết dày dặn.'
    ]
  },
  {
    dish: 'Hủ tiếu',
    province: 'TP.HCM',
    area: 'Quận 1',
    regionalFlavor: 'Miền Nam',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80&w=600',
    signatureDishes: ['Hủ tiếu Nam Vang khô', 'Hủ tiếu Nam Vang nước', 'Hủ tiếu mì đặc biệt'],
    names: [
      'Hủ tiếu Nam Vang Nhân Quán', 'Hủ tiếu Nam Vang Quỳnh', 'Hủ tiếu Hồng Phát',
      'Hủ tiếu dê Cường Ký', 'Hủ tiếu Cả Cần', 'Hủ tiếu mì Thiệu Ký',
      'Hủ tiếu hồ Ba Đạt', 'Hủ tiếu Nam Vang Thành Đạt'
    ],
    addresses: [
      '122D Nguyễn Trãi, Quận 1', 'A65 Nguyễn Trãi, Quận 1', '391 Võ Văn Tần, Quận 3',
      '62 Thuận Kiều, Quận 5', '110 Hùng Vương, Quận 5', '66/5 Lê Đại Hành, Quận 11',
      'Cư xá Thanh Đa, Bình Thạnh', '29 Nguyễn Thị Minh Khai, Quận 1'
    ],
    leads: [
      'Thương hiệu hủ tiếu Nam Vang Nhân Quán nổi bật với nước sốt trộn khô đậm đà ngọt bùi cực thơm.',
      'Hủ tiếu Quỳnh chinh phục thực khách nhờ tô nước dùng thanh trong ninh từ xương ống tủy ngọt ngào.',
      'Hồng Phát là nhà hàng hủ tiếu sang trọng bậc nhất với phong cách phục vụ chuyên nghiệp chu đáo.',
      'Hương vị hủ tiếu dê tiềm thuốc bắc độc đáo béo bùi tẩm bổ sinh lực tuyệt vời.',
      'Hủ tiếu Cả Cần danh tiếng lâu năm nổi tiếng với những viên xíu mại thịt băm khổng lồ mọng nước.',
      'Hủ tiếu mì Thiệu Ký thâm niên hơn 70 năm nổi danh nhờ sợi mì trứng tự làm dẻo dai giòn sần sật.',
      'Món hủ tiếu hồ độc lạ Chợ Lớn với lá lòng heo khía và bánh hủ tiếu bản to dẹt xốt sệt đậm đà.',
      'Hủ tiếu Thành Đạt phục vụ 24/7 luôn đông đúc nhờ lòng heo tươi rói luộc chín vừa tới ngọt mềm.'
    ]
  },
  {
    dish: 'Lẩu gà lá é',
    province: 'Lâm Đồng',
    area: 'Đà Lạt',
    regionalFlavor: 'Tây Nguyên',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=600',
    signatureDishes: ['Lẩu gà lá é đặc biệt', 'Gà nướng muối ớt', 'Lòng gà xào mướp'],
    names: [
      'Lẩu gà lá é Tao Ngộ đường 3/4', 'Lẩu gà lá é 668', 'Lẩu gà lá é Hạnh Đà Lạt',
      'Lẩu gà lá é Thúy Hiếu', 'Lẩu gà lá é Phú Yên tại Đà Lạt', 'Lẩu gà lá é Bùi Thị Xuân',
      'Lẩu gà lá é Hội Ngộ', 'Lẩu gà lá é Phù Đổng Thiên Vương'
    ],
    addresses: [
      '5 Đường 3 Tháng 4, Phường 3', '2 Chu Văn An, Phường 3', '6 Yersin, Phường 10',
      '21 Hùng Vương, Phường 10', '12 Lê Đại Hành, Phường 1', '140 Bùi Thị Xuân, Phường 2',
      '15 Tô Hiến Thành, Phường 3', '32 Phù Đổng Thiên Vương, Phường 8'
    ],
    leads: [
      'Quán lẩu gà lá é Tao Ngộ huyền thoại, cái tên đầu tiên xuất hiện khi nhắc đến ẩm thực Đà Lạt.',
      'Lẩu gà 668 nổi tiếng nhờ thịt gà đồi dai giòn chắc thịt kết hợp nấm sò thơm ngọt bùi cực đỉnh.',
      'Quán lẩu gà của chị Hạnh thu hút thực khách với nước lẩu chua cay mặn ngọt nêm nếm đậm đà.',
      'Địa điểm lẩu gà lá é rộng rãi thoáng mát thích hợp cho những đoàn khách đông người tụ họp.',
      'Hương vị gà thả đồi nguyên bản chuẩn xứ Nẫu Phú Yên dọn kèm lá é trắng nồng ấm sảng khoái.',
      'Nằm ngay trung tâm thành phố vô cùng thuận tiện di chuyển thưởng thức tô lẩu gà nóng hổi đêm đông.',
      'Quán lẩu gà Hội Ngộ ấm cúng là chốn sum vầy lý tưởng cùng bạn bè bên làn khói lẩu nghi ngút.',
      'Lẩu gà lá é Phù Đổng Thiên Vương nức tiếng ngon bổ rẻ được các bạn sinh viên cực kỳ săn đón.'
    ]
  },
  {
    dish: 'Bún đậu',
    province: 'Hà Nội',
    area: 'Hoàn Kiếm',
    regionalFlavor: 'Miền Bắc',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600',
    signatureDishes: ['Bún đậu mẹt đầy đủ', 'Bún đậu thịt chân giò', 'Bún đậu lòng rán'],
    names: [
      'Bún đậu mắm tôm Hàng Khay', 'Bún đậu Cây Đa Thụy Khuê', 'Bún đậu Trung Yên Ngõ Nhỏ',
      'Bún đậu Nghĩa Tân Cầu Giấy', 'Bún đậu mẹt Khương Thượng', 'Bún đậu mắm tôm Phan Huy Ích',
      'Bún đậu Phố Cổ Gốc Đa', 'Bún đậu lòng dồi rán Phùng Hưng'
    ],
    addresses: [
      '31 Ngõ Hàng Khay, Quận Hoàn Kiếm', '235 Thụy Khuê, Quận Tây Hồ', 'Ngõ Trung Yên, Đinh Liệt, Quận Hoàn Kiếm',
      '104 C3 Nghĩa Tân, Quận Cầu Giấy', 'Ngõ 111 Khương Thượng, Quận Đống Đa', '21 Phan Huy Ích, Quận Ba Đình',
      '4 Hàng Quạt, Quận Hoàn Kiếm', '125 Phùng Hưng, Quận Hoàn Kiếm'
    ],
    leads: [
      'Mẹt bún đậu Hàng Khay tinh tế đầy ắp lòng dồi rán giòn dẻo cùng mắm tôm sủi bọt thơm lừng.',
      'Thương hiệu Cây Đa Thụy Khuê có đậu hũ trơ trọi chiên giòn rụm bên ngoài, béo mềm bên trong.',
      'Ẩn sâu trong con ngõ cổ kính Trung Yên nhưng luôn nườm nượp khách nhờ chả cốm dẻo quánh ngon mê ly.',
      'Bún đậu Nghĩa Tân nổi danh đất Cầu Giấy phục vụ mẹt bún dồi sụn nướng béo bùi sần sật giòn tan.',
      'Mẹt bún đậu mộc mạc đậm chất sinh viên Khương Thượng ngon bổ rẻ tràn ngập topping hấp dẫn.',
      'Địa điểm bún đậu mắm tôm Phan Huy Ích ghi điểm bởi lòng luộc chín tới ngọt mềm ăn kèm rau sống sạch.',
      'Thương hiệu Gốc Đa Phố Cổ giữ trọn vẹn hương vị mắm tôm Thanh Hóa chưng cất thơm ngào ngạt.',
      'Quán bún đậu nức tiếng dọn kèm mẹt lòng dồi chiên giòn rụm béo ngậy nhâm nhi cực kỳ đưa miệng.'
    ]
  },
  {
    dish: 'Bánh khọt',
    province: 'Vũng Tàu',
    area: 'Vũng Tàu',
    regionalFlavor: 'Miền Nam',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=600',
    signatureDishes: ['Bánh khọt tôm tươi', 'Bánh khọt mực sữa', 'Bánh khọt trứng muối'],
    names: [
      'Bánh khọt Cô Ba Vũng Tàu', 'Bánh khọt Gốc Vú Sữa', 'Bánh khọt Út Loan Vũng Tàu',
      'Bánh khọt Miền Đông', 'Bánh khọt Cô Hoàng', 'Bánh khọt bà Hai Hoàng Hoa Thám',
      'Bánh khọt Cây Sung', 'Bánh khọt 14 Hoàng Hoa Thám'
    ],
    addresses: [
      '1 Hoàng Hoa Thám, Phường 3', '14 Nguyễn Trường Tộ, Phường 2', '67 Bà Triệu, Phường 4',
      '59 Bà Triệu, Phường 4', '19 sườn đồi Vũng Tàu', '42 Hoàng Hoa Thám, Phường 2',
      '19 Hoàng Hoa Thám, Phường 3', '14 Hoàng Hoa Thám, Phường 2'
    ],
    leads: [
      'Thương hiệu bánh khọt Cô Ba sang trọng nổi tiếng thế giới nhờ vỏ bánh giòn xốp ráo dầu.',
      'Quán bánh khọt Gốc Vú Sữa huyền thoại, địa điểm check-in ẩm thực không thể bỏ qua của du khách.',
      'Bánh khọt Út Loan mang hương vị béo ngậy bùi bùi nhờ lớp bột gạo pha nước cốt dừa hảo hạng.',
      'Địa điểm bình dân ngon bổ rẻ phục vụ bánh khọt tôm nhảy tươi rói giòn rụm cuốn hút vô cùng.',
      'Bánh khọt Cô Hoàng thu hút thực khách nhờ lớp tôm chấy đỏ rực thơm lừng rải đều khắp mặt bánh.',
      'Hương vị bánh khọt đổ khuôn đất sét nung truyền thống của bà Hai dẻo ngon ráo mỡ thanh đạm.',
      'Bánh khọt Cây Sung nổi tiếng với phần nước mắm chua ngọt pha chế cầu kỳ tỏi ớt băm nhuyễn cực ngon.',
      'Địa chỉ hẻm nhỏ quen thuộc của dân bản địa sành ăn bánh khọt tôm mực tươi ngon giá cực mềm.'
    ]
  },
  {
    dish: 'Bánh cuốn',
    province: 'Hà Nội',
    area: 'Hoàn Kiếm',
    regionalFlavor: 'Miền Bắc',
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=600',
    signatureDishes: ['Bánh cuốn nóng nhân thịt', 'Bánh cuốn Thanh Trì chả quế', 'Bánh cuốn trứng lòng đào'],
    names: [
      'Bánh cuốn Thanh Vân Hàng Gà', 'Bánh cuốn Bà Hoành Tô Hiến Thành', 'Bánh cuốn Phủ Lý Hàng Cót',
      'Bánh cuốn nóng Tây Hồ', 'Bánh cuốn Gia An Phố Huế', 'Bánh cuốn Bà Hanh Yên Phụ',
      'Bánh cuốn nóng Nguyễn Bỉnh Khiêm', 'Bánh cuốn tráng tay Hàng Cót'
    ],
    addresses: [
      '14 Hàng Gà, Quận Hoàn Kiếm', '66 Tô Hiến Thành, Quận Hai Bà Trưng', '39 Hàng Cót, Quận Hoàn Kiếm',
      '34 Yên Phụ, Quận Tây Hồ', '111 Phố Huế, Quận Hai Bà Trưng', '26B Thụy Khuê, Quận Tây Hồ',
      '19 Nguyễn Bỉnh Khiêm, Quận Hai Bà Trưng', '68 Hàng Cót, Quận Hoàn Kiếm'
    ],
    leads: [
      'Bánh cuốn Thanh Vân nức tiếng Hàng Gà nhờ lớp vỏ bánh mỏng mịn, nhân thịt mộc nhĩ dạt dào.',
      'Thương hiệu bánh cuốn Thanh Trì Bà Hoành huyền thoại ăn kèm chả quế thơm phức mộc mạc cực ngon.',
      'Bánh cuốn Phủ Lý ăn kèm thịt xiên nướng than hoa vàng rộm đậm đà thơm ngậy lạ miệng hấp dẫn.',
      'Hương vị bánh cuốn nóng hổi tráng tay mỏng dính rắc hành phi tự phi vàng ruộm giòn tan rôm rốp.',
      'Hệ thống bánh cuốn Gia An hiện đại phục vụ đĩa bánh dẻo mịn từ bột gạo tám thơm thượng hạng.',
      'Bánh cuốn Bà Hanh gìn giữ bí quyết tráng bánh đất nung không dầu mỡ, ăn kèm rau thơm láng trứ danh.',
      'Góc quán nhỏ vỉa hè lúc nào cũng tấp nập hơi khói lò tráng bánh cuốn nóng thơm phức mỗi chiều.',
      'Thưởng thức đĩa bánh cuốn trứng lòng đào béo ngậy ngọt lịm tan chảy nơi đầu lưỡi tinh tế cực kỳ.'
    ]
  },
  {
    dish: 'Gỏi cuốn',
    province: 'TP.HCM',
    area: 'Quận 1',
    regionalFlavor: 'Miền Nam',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600',
    signatureDishes: ['Gỏi cuốn tôm thịt', 'Gỏi cuốn tai heo dưa leo', 'Gỏi cuốn bì'],
    names: [
      'Gỏi cuốn Cô Giang Quận 1', 'Gỏi cuốn tai heo Nguyễn Tri Phương', 'Gỏi cuốn Lê Văn Sỹ Quận 3',
      'Gỏi cuốn ngon Sài Gòn Đề Thám', 'Gỏi cuốn Cô Hồng chợ Bến Thành', 'Gỏi cuốn chú Tèo Quận 5',
      'Gỏi cuốn tôm nhảy xốt bơ đậu phộng', 'Gỏi cuốn Đề Thám vỉa hè'
    ],
    addresses: [
      '122 Cô Giang, Quận 1', '140 Nguyễn Tri Phương, Quận 5', '359 Lê Văn Sỹ, Quận 3',
      '84 Đề Thám, Quận 1', 'Sạp 112 Chợ Bến Thành, Quận 1', '180 Trần Hưng Đạo, Quận 5',
      '19 Lê Lợi, Quận 1', '90 Đề Thám, Quận 1'
    ],
    leads: [
      'Chiếc gỏi cuốn tôm thịt Cô Giang ú nu căng tròn chấm kèm tương đen xốt lạc béo ngậy đậm đà.',
      'Độc đáo với món gỏi cuốn tai heo luộc giòn sần sật chấm kèm mắm nêm tỏi ớt cay nồng tê lưỡi.',
      'Gỏi cuốn Lê Văn Sỹ thu hút thực khách nhờ tôm nhảy tươi rói nhìn rõ mồn một qua lớp bánh tráng mỏng dính.',
      'Địa điểm ẩm thực đường phố lý tưởng phục vụ những cuốn gỏi tươi mát thơm phức mùi lá hẹ húng quế.',
      'Góc gỏi cuốn nhỏ đắt khách trong chợ Bến Thành được lòng khách nước ngoài du lịch nhờ sự tươi ngon.',
      'Gỏi cuốn chú Tèo đậm đà phong vị Trung Hoa vùng Chợ Lớn với nước chấm tương đậu lên men đặc sắc.',
      'Sự nâng cấp tinh tế của gỏi cuốn tôm nhảy xốt bơ đậu phộng béo bùi bùi ăn mãi không chán.',
      'Quán gỏi cuốn vỉa hè siêu đông khách nhâm nhi nhẹ nhàng chiều tà Sài Gòn bình yên ấm áp.'
    ]
  },
  {
    dish: 'Bánh mì',
    province: 'Quảng Nam',
    area: 'Hội An',
    regionalFlavor: 'Miền Trung',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=600',
    signatureDishes: ['Bánh mì thập cẩm đặc biệt', 'Bánh mì xá xíu dăm bông', 'Bánh mì gà xé pate'],
    names: [
      'Bánh mì Phượng Hội An', 'Bánh mì Madam Khánh (Banh Mi Queen)', 'Bánh mì Bà Lành Hội An',
      'Bánh mì Bích Hội An', 'Bánh mì Phố Cổ Trần Phú', 'Bánh mì Lecoq Hội An',
      'Bánh mì Cô Hoa Trần Cao Vân', 'Bánh mì thịt xá xíu Phan Chu Trinh'
    ],
    addresses: [
      '2B Phan Chu Trinh, Minh An', '115 Trần Cao Vân, Minh An', '430 Cửa Đại, Cẩm Châu',
      '57 Phan Chu Trinh, Minh An', '2 Trần Phú, Minh An', '12 Bạch Đằng, Minh An',
      '89 Trần Cao Vân, Minh An', '102 Phan Chu Trinh, Minh An'
    ],
    leads: [
      'Ổ bánh mì nức tiếng toàn thế giới được cố đầu bếp Anthony Bourdain ví như một bản giao hưởng ẩm thực.',
      'Bánh mì của Madam Khánh (Nữ hoàng bánh mì) sở hữu lớp pate thơm ngậy nướng lò cực kỳ cầu kỳ cuốn hút.',
      'Bánh mì Bà Lành giản dị truyền thống nhưng có vị pate gan heo thơm nồng đượm cuốn hút khó cưỡng.',
      'Quán bánh mì nhỏ đắt khách nhờ nước sốt bơ trứng tự đánh béo ngậy mềm mọng ngon tuyệt vời.',
      'Địa chỉ bánh mì giòn rụm nằm cạnh gốc đa cổ thụ đầu phố luôn tấp nập khách du lịch xếp hàng chờ.',
      'Sự giao thoa ẩm thực Pháp - Việt tinh tế trong ổ bánh mì baguette giòn xốp ráo bơ của Lecoq.',
      'Bánh mì Cô Hoa bình dân đẫm nhân pate chả lụa xá xíu thơm lừng nóng hổi chan nước sốt đậm đà.',
      'Thưởng thức ổ bánh mì kẹp thịt heo xá xíu tẩm ướp ngũ vị hương nướng mật ong vàng óng thơm ngậy.'
    ]
  },
  {
    dish: 'Bún riêu',
    province: 'TP.HCM',
    area: 'Quận 1',
    regionalFlavor: 'Miền Nam',
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=600',
    signatureDishes: ['Bún riêu cua ốc giò heo', 'Bún riêu cua gánh đặc biệt', 'Bún riêu bạch tuộc độc lạ'],
    names: [
      'Bún riêu Gánh chợ Bến Thành', 'Bún riêu Nguyễn Cảnh Chân', 'Bún riêu cua ốc Cô Giang',
      'Bún riêu hẻm 417 Lê Văn Sỹ', 'Bún riêu cua giò heo Kỳ Đồng', 'Bún riêu Bà Hoa Chợ Ông Tạ',
      'Bún riêu 77 Hoàng Sa', 'Bún riêu ốc vỉa hè Tôn Thất Thuyết'
    ],
    addresses: [
      '4 Phan Bội Châu, Quận 1', '18/5 Nguyễn Cảnh Chân, Quận 1', '66 Cô Giang, Quận 1',
      '417/12 Lê Văn Sỹ, Quận 3', '24 Kỳ Đồng, Quận 3', '102 Cách Mạng Tháng Tám, Tân Bình',
      '77 Hoàng Sa, Đa Kao, Quận 1', '122 Tôn Thất Thuyết, Quận 4'
    ],
    leads: [
      'Tô bún riêu gánh nức tiếng hơn 40 năm ở cửa Đông chợ Bến Thành, điểm đến quen thuộc của giới nghệ sĩ.',
      'Nổi tiếng với miếng riêu cua nguyên chất to dày đẫm vị béo bùi, chấm mắm tôm ngon xuất sắc.',
      'Tô bún riêu cua ốc tươi rói nóng hổi thơm nồng nước me chua ngọt sảng khoái cực đã.',
      'Hẻm bún riêu Lê Văn Sỹ trứ danh luôn đông nghịt bàn nhờ nước lẩu riêu đậm đà cua đồng nguyên chất.',
      'Bún riêu Kỳ Đồng chinh phục thực khách bằng khoanh giò heo ninh mềm mọng tan chảy ngọt tủy xương.',
      'Hương vị bún riêu pha trộn phong vị Bắc - Nam độc đáo thơm nồng hành phi nước dùng béo ngọt ngậy.',
      'Ngồi bên bờ kênh Nhiêu Lộc lộng gió nhâm nhi tô bún riêu cua bạch tuộc giòn sần sật lạ miệng sảng khoái.',
      'Quán bún riêu ốc vỉa hè bình dân cực kỳ đông đúc thực khách nhờ rổ ốc bươu xào tỏi ớt cay nồng vàng rộm.'
    ]
  }
];

function generateMore(): Restaurant[] {
  const list: Restaurant[] = [];
  let idCounter = 100000;
  
  dishConfigs.forEach((config) => {
    for (let i = 0; i < 8; i++) {
      const name = config.names[i];
      const address = config.addresses[i];
      const lead = config.leads[i];
      const id = `${idCounter++}`;
      
      const allAmenities = ['Có chỗ đỗ ô tô', 'Có điều hòa', 'Phù hợp trẻ em', 'Có phòng riêng', 'Thanh toán thẻ', 'Có quầy bar', 'Phù hợp gia đình', 'Bãi để xe máy', 'Vỉa hè', 'Phù hợp ăn đêm'];
      const amenities = allAmenities.filter(() => Math.random() > 0.5);
      if (amenities.length === 0) amenities.push('Bãi để xe máy');
      
      const priceSegment = Math.random() > 0.4 ? ['Trung cấp'] : ['Bình dân'];
      
      const awards: string[] = [];
      const michelinGuide: string[] = [];
      if (Math.random() > 0.8) {
        awards.push('Michelin Guide');
        const michelinLevels = ['Bib Gourmand', 'Selected', 'Một sao Michelin'];
        michelinGuide.push(michelinLevels[Math.floor(Math.random() * michelinLevels.length)]);
      } else if (Math.random() > 0.7) {
        awards.push('Top Review VnE');
      } else if (Math.random() > 0.6) {
        awards.push('Quán ăn lâu đời');
      }
      
      const rating = Number((4.1 + Math.random() * 0.8).toFixed(1));
      const reviewCount = Math.floor(120 + Math.random() * 1500);
      
      list.push({
        id,
        name,
        province: config.province,
        area: config.area,
        ward: 'Phường trung tâm',
        address,
        thumbnail: config.image,
        images: [config.image],
        lead,
        signatureDishes: [config.dish, ...config.signatureDishes],
        cuisineType: 'Bình dân',
        regionalFlavor: config.regionalFlavor,
        priceSegment,
        amenities,
        awards,
        michelinGuide: michelinGuide.length > 0 ? michelinGuide : undefined,
        rating,
        reviewCount,
      });
    }
  });
  
  return list;
}

export const mockRestaurants: Restaurant[] = [
  ...baseRestaurants,
  ...generateMore()
];
