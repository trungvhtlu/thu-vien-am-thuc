import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, Star, MessageSquare, Clock, Phone, Share2, Heart, CheckCircle2, Award, Info } from 'lucide-react';
import { mockRestaurants } from '../data/restaurants';
import { Breadcrumb } from '../components/Breadcrumb';
import { RestaurantCard } from '../components/RestaurantCard';
import { AdvancedSearch } from '../components/AdvancedSearch';
import { generateSlug } from '../utils/slugify';

interface Review {
  id: string;
  userName: string;
  avatarText: string;
  content: string;
  rating: number;
  likes: number;
  hasLiked?: boolean;
  repliesCount: number;
  time: string;
  isUserReview?: boolean;
  replies?: Array<{
    userName: string;
    content: string;
    time: string;
  }>;
}

const getDefaultReviews = (restaurantId: string, restaurantName: string): Review[] => {
  return [
    {
      id: `m1-${restaurantId}`,
      userName: 'sonho35191',
      avatarText: 'S',
      content: `Quán ${restaurantName} ăn rất ngon, phục vụ nhanh nhẹn và nhiệt tình. Đúng chuẩn hương vị đặc trưng, giá cả cũng vô cùng hợp lý với chất lượng. Nhất định sẽ rủ bạn bè quay lại thêm nhiều lần nữa!`,
      rating: 5,
      likes: 871,
      repliesCount: 2,
      time: '12 giờ trước',
      replies: [
        { userName: 'mr.Trí', content: 'Đồng ý với bác, mình cũng ăn ở đây 3 lần rồi rất ưng ý!', time: '10 giờ trước' },
        { userName: 'Xắng Ca', content: 'Quán này có món nào đặc biệt nên thử nhất hả bạn?', time: '8 giờ trước' }
      ]
    },
    {
      id: `m2-${restaurantId}`,
      userName: 'mr.Trí',
      avatarText: 'T',
      content: `Không gian quán sạch sẽ, thoáng mát, đồ ăn nêm nếm rất vừa vị. Thích nhất món đặc sản của quán, nước dùng ngọt thanh nguyên chất. Chỉ có điểm trừ nhỏ là cuối tuần khá đông nên chờ hơi lâu.`,
      rating: 4,
      likes: 729,
      repliesCount: 1,
      time: '9 giờ trước',
      replies: [
        { userName: 'MK Se7en', content: 'Cuối tuần đi tầm 5h chiều là đỡ đông đó bạn ơi.', time: '7 giờ trước' }
      ]
    },
    {
      id: `m3-${restaurantId}`,
      userName: 'Xắng Ca',
      avatarText: 'X',
      content: `Biết đến quán qua gợi ý của Thư viện Ẩm thực VnExpress và thực sự rất hài lòng. Đồ ăn tươi ngon, nước chấm thanh thanh ăn kèm rau sống sạch sẽ. Rất đáng để trải nghiệm!`,
      rating: 5,
      likes: 527,
      repliesCount: 0,
      time: '9 giờ trước'
    },
    {
      id: `m4-${restaurantId}`,
      userName: 'MK Se7en',
      avatarText: 'M',
      content: `Hương vị món ăn khá ổn định nhưng thái độ phục vụ của nhân viên lúc cao điểm cần nhanh nhẹn hơn một chút. Hy vọng lần sau tới trải nghiệm sẽ trọn vẹn hơn.`,
      rating: 3,
      likes: 441,
      repliesCount: 0,
      time: '12 giờ trước'
    }
  ];
};

export const DetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Extract ID from slug format: slug-ten-quan-slug-khu-vuc-ID.html
  const idMatch = slug?.match(/-(\d+)\.html$/);
  const id = idMatch ? idMatch[1] : null;

  const restaurant = mockRestaurants.find(r => r.id === id);

  if (!restaurant) {
    return <Navigate to="/" replace />;
  }

  const provinceSlug = generateSlug(restaurant.province);

  // States for Reviews
  const [reviews, setReviews] = useState<Review[]>([]);
  const [userReview, setUserReview] = useState<Review | null>(null);
  const [userRating, setUserRating] = useState<number>(5);
  const [commentText, setCommentText] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'quan-tam' | 'moi-nhat'>('quan-tam');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [expandedReplies, setExpandedReplies] = useState<Record<string, boolean>>({});

  // Sync state with LocalStorage for specific restaurant ID
  useEffect(() => {
    if (id) {
      // Load general reviews
      const storedReviews = localStorage.getItem(`vne_reviews_${id}`);
      if (storedReviews) {
        setReviews(JSON.parse(storedReviews));
      } else {
        const defaults = getDefaultReviews(id, restaurant.name);
        setReviews(defaults);
        localStorage.setItem(`vne_reviews_${id}`, JSON.stringify(defaults));
      }

      // Load user review
      const storedUserReview = localStorage.getItem(`vne_user_review_${id}`);
      if (storedUserReview) {
        setUserReview(JSON.parse(storedUserReview));
      } else {
        setUserReview(null);
      }

      // Pre-fill user name if they've submitted reviews before in other restaurants
      const savedName = localStorage.getItem('vne_user_name') || '';
      setUserName(savedName);
      
      // Clear inputs
      setCommentText('');
      setUserRating(5);
      setIsEditing(false);
    }
  }, [id, restaurant.name]);

  // Recalculate dynamic rating and reviews count
  const displayRating = userReview 
    ? Number(((restaurant.rating * restaurant.reviewCount + userReview.rating) / (restaurant.reviewCount + 1)).toFixed(1))
    : restaurant.rating;

  const displayReviewCount = userReview 
    ? restaurant.reviewCount + 1 
    : restaurant.reviewCount;

  // Mock related restaurants
  const relatedRestaurants = mockRestaurants
    .filter(r => r.id !== restaurant.id && r.province === restaurant.province)
    .slice(0, 3);

  // Likes toggler
  const handleLike = (reviewId: string) => {
    if (userReview && userReview.id === reviewId) {
      const updated = {
        ...userReview,
        likes: userReview.hasLiked ? userReview.likes - 1 : userReview.likes + 1,
        hasLiked: !userReview.hasLiked
      };
      localStorage.setItem(`vne_user_review_${id}`, JSON.stringify(updated));
      setUserReview(updated);
      return;
    }

    const updatedReviews = reviews.map(r => {
      if (r.id === reviewId) {
        return {
          ...r,
          likes: r.hasLiked ? r.likes - 1 : r.likes + 1,
          hasLiked: !r.hasLiked
        };
      }
      return r;
    });
    setReviews(updatedReviews);
    localStorage.setItem(`vne_reviews_${id}`, JSON.stringify(updatedReviews));
  };

  // Toggle replies expand
  const toggleReplies = (reviewId: string) => {
    setExpandedReplies(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }));
  };

  // Add a reply
  const handleAddReply = (reviewId: string, replyText: string) => {
    if (!replyText.trim()) return;
    const replierName = userName.trim() || 'Độc giả ẩn danh';

    if (userReview && userReview.id === reviewId) {
      const updatedReplies = [...(userReview.replies || []), {
        userName: replierName,
        content: replyText.trim(),
        time: 'Vừa xong'
      }];
      const updated = {
        ...userReview,
        replies: updatedReplies,
        repliesCount: updatedReplies.length
      };
      localStorage.setItem(`vne_user_review_${id}`, JSON.stringify(updated));
      setUserReview(updated);
      return;
    }

    const updatedReviews = reviews.map(r => {
      if (r.id === reviewId) {
        const updatedReplies = [...(r.replies || []), {
          userName: replierName,
          content: replyText.trim(),
          time: 'Vừa xong'
        }];
        return {
          ...r,
          replies: updatedReplies,
          repliesCount: updatedReplies.length
        };
      }
      return r;
    });
    setReviews(updatedReviews);
    localStorage.setItem(`vne_reviews_${id}`, JSON.stringify(updatedReviews));
  };

  // Submit review form
  const handleSubmitReview = () => {
    if (!commentText.trim() || !userName.trim()) return;

    localStorage.setItem('vne_user_name', userName.trim());

    if (isEditing && userReview) {
      const updatedUserReview: Review = {
        ...userReview,
        userName: userName.trim(),
        avatarText: userName.trim()[0].toUpperCase(),
        content: commentText.trim(),
        rating: userRating,
        time: 'Vừa chỉnh sửa'
      };
      
      localStorage.setItem(`vne_user_review_${id}`, JSON.stringify(updatedUserReview));
      setUserReview(updatedUserReview);
      setIsEditing(false);
    } else {
      const newUserReview: Review = {
        id: `user-${Date.now()}`,
        userName: userName.trim(),
        avatarText: userName.trim()[0].toUpperCase(),
        content: commentText.trim(),
        rating: userRating,
        likes: 0,
        repliesCount: 0,
        time: 'Vừa xong',
        isUserReview: true,
        replies: []
      };

      localStorage.setItem(`vne_user_review_${id}`, JSON.stringify(newUserReview));
      setUserReview(newUserReview);
    }

    setCommentText('');
  };

  // Edit review
  const handleEditReview = (review: Review) => {
    setCommentText(review.content);
    setUserRating(review.rating);
    setUserName(review.userName);
    setIsEditing(true);
    
    const element = document.getElementById('review-form-anchor');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setCommentText('');
    setUserRating(5);
    setIsEditing(false);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <AdvancedSearch />
      
      <Breadcrumb 
        items={[
          { label: restaurant.province, url: `/${provinceSlug}` },
          { label: `Quán ${restaurant.signatureDishes[0] || 'ăn'}`, url: `/${provinceSlug}/quan-${generateSlug(restaurant.signatureDishes[0] || 'an')}` },
          { label: restaurant.name }
        ]} 
      />

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="mb-6">
                <h1 className="text-[28px] md:text-[32px] font-bold text-vne-red mb-2 leading-tight">
                  {restaurant.name}
                </h1>
                {restaurant.commonName && (
                  <p className="text-vne-gray text-[14px] italic mb-4">Thường gọi: {restaurant.commonName}</p>
                )}
                
                <div className="flex flex-wrap items-center gap-4 text-[14px] mb-4">
                  <div className="flex items-center gap-1 text-[#f5a623] font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{displayRating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-vne-gray">
                    <MessageSquare className="w-4 h-4" />
                    <span className="cursor-pointer hover:text-vne-red">{displayReviewCount} Đánh giá</span>
                  </div>
                  <div className="text-vne-border">|</div>
                  <div className="flex items-center gap-1 text-vne-gray">
                    <MapPin className="w-4 h-4" />
                    <span>{restaurant.area}, {restaurant.province}</span>
                  </div>
                </div>
                
                <div className="flex gap-2 mb-6">
                  <button className="flex items-center gap-2 px-3 py-1.5 bg-vne-bg hover:bg-[#eee] rounded-[2px] text-[13px] font-medium transition-colors">
                    <Share2 className="w-3.5 h-3.5" /> Chia sẻ
                  </button>
                  <button className="flex items-center gap-2 px-3 py-1.5 bg-vne-bg hover:bg-[#eee] rounded-[2px] text-[13px] font-medium transition-colors">
                    <Heart className="w-3.5 h-3.5" /> Lưu lại
                  </button>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="mb-6 h-64 md:h-[320px] rounded-[4px] overflow-hidden bg-vne-bg flex gap-2">
                <div className="flex-1 h-full relative group cursor-pointer">
                  <img src={restaurant.images[0]} alt={restaurant.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="hidden md:flex w-1/4 flex-col gap-2 h-full">
                  {restaurant.images.slice(1, 3).map((img, idx) => (
                    <div key={idx} className="flex-1 relative group cursor-pointer">
                      <img src={img} alt="" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </div>
                  ))}
                  {/* If fewer images, just repeat or show placeholder */}
                  {restaurant.images.length < 3 && (
                    <div className="flex-1 bg-vne-bg flex items-center justify-center text-vne-gray group cursor-pointer hover:bg-vne-border transition-colors">
                      <span className="text-[12px] font-medium">Xem tất cả ảnh</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-vne-title mb-10 text-[15px] leading-relaxed">
                <p className="lead text-[16px] font-medium text-vne-title mb-6">
                  {restaurant.lead}
                </p>
                
                <div className="bg-vne-bg p-6 rounded-[2px] my-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-[14px]">
                  <div>
                    <h3 className="font-bold text-vne-title mb-3 flex items-center border-b border-vne-border pb-2">
                      <Info className="w-4 h-4 mr-2 text-vne-red" /> Thông tin cơ bản
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex gap-2">
                        <span className="text-vne-gray w-28 shrink-0">Địa chỉ:</span>
                        <span className="font-medium">{restaurant.address}, {restaurant.area}, {restaurant.province}</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vne-gray w-28 shrink-0">Loại hình:</span>
                        <span className="font-medium">{restaurant.cuisineType}</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vne-gray w-28 shrink-0">Phân khúc:</span>
                        <span className="font-medium">{restaurant.priceSegment.join(', ')}</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vne-gray w-28 shrink-0">Phong vị:</span>
                        <span className="font-medium">{restaurant.regionalFlavor}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-vne-title mb-3 flex items-center border-b border-vne-border pb-2">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-vne-red" /> Tiện ích
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {restaurant.amenities.map(amenity => (
                        <li key={amenity} className="flex items-center text-vne-title">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#f5a623] mr-2" />
                          {amenity}
                        </li>
                      ))}
                      {restaurant.amenities.length === 0 && <li className="text-vne-gray italic">Chưa cập nhật</li>}
                    </ul>
                  </div>
                </div>

                {restaurant.articleContent && (
                  <div className="mb-8">
                    <div 
                      className="prose prose-lg max-w-none text-vne-text [&>h1]:text-[28px] [&>h1]:md:text-[32px] [&>h1]:font-bold [&>h1]:text-vne-title [&>h1]:mb-4 [&>h1]:leading-tight [&>p]:mb-4 [&>p]:leading-relaxed [&>figure]:mb-6 [&>figure>figcaption]:text-[13px] [&>figure>figcaption]:text-vne-gray [&>figure>figcaption]:mt-2 [&>figure>figcaption]:text-center [&>figure>figcaption]:bg-gray-50 [&>figure>figcaption]:py-2"
                      dangerouslySetInnerHTML={{ __html: restaurant.articleContent }}
                    />
                  </div>
                )}

                {/* Awards section */}
                {restaurant.awards.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-[18px] font-bold text-vne-title mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-vne-red" />
                      Danh hiệu & Giải thưởng
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.awards.map(award => (
                        <span key={award} className="inline-flex items-center px-3 py-1 bg-vne-bg text-[#444] font-medium text-[12px] border border-vne-border rounded-[2px]">
                          {award}
                        </span>
                      ))}
                      {restaurant.michelinGuide?.map(mg => (
                        <span key={mg} className="inline-flex items-center px-3 py-1 bg-vne-red text-white font-bold text-[12px] rounded-[2px] uppercase">
                          Michelin: {mg}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dynamic Tags for SEO Internal Linking */}
                <div className="border-t border-vne-border pt-5 mt-6">
                  <div className="flex flex-wrap gap-2">
                    {restaurant.signatureDishes.map(dish => (
                      <Link 
                        key={dish}
                        to={`/${provinceSlug}/quan-${generateSlug(dish)}`}
                        className="px-[10px] py-1 bg-vne-bg hover:bg-vne-red hover:text-white text-vne-gray text-[11px] rounded-[12px] transition-colors"
                      >
                        #{generateSlug(dish)}
                      </Link>
                    ))}
                    <Link 
                      to={`/${provinceSlug}?khu-vuc=${generateSlug(restaurant.area)}`}
                      className="px-[10px] py-1 bg-vne-bg hover:bg-vne-red hover:text-white text-vne-gray text-[11px] rounded-[12px] transition-colors"
                    >
                      #{generateSlug(restaurant.area)}
                    </Link>
                  </div>
                </div>
              </div>

              {/* VNEXPRESS REVIEWS & COMMENTS SECTION */}
              <div className="mt-8 bg-white p-6 border border-vne-border rounded-[2px]">
                {/* Header block resembling VnExpress layout */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-vne-border pb-3 mb-5 gap-2">
                  <div className="flex items-baseline gap-2">
                    <span className="w-1.5 h-5 bg-vne-red inline-block self-center mr-1"></span>
                    <h3 className="text-[20px] font-bold text-vne-title">Ý kiến ({displayReviewCount})</h3>
                  </div>
                  <span className="text-[12px] text-vne-gray">
                    Vui lòng tuân thủ <span className="underline cursor-pointer hover:text-vne-red">quy định</span> khi chia sẻ ý kiến
                  </span>
                </div>

                {/* Submit / Edit review box */}
                <div id="review-form-anchor" className="bg-[#fcfcfc] border border-vne-border p-4 rounded-[2px] mb-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-bold text-vne-title">Đánh giá của bạn:</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setUserRating(star)}
                            className="transition-transform hover:scale-110 focus:outline-none cursor-pointer"
                          >
                            <Star 
                              className={`w-5 h-5 ${
                                star <= userRating 
                                  ? 'fill-[#f5a623] text-[#f5a623]' 
                                  : 'text-gray-300 hover:text-[#f5a623]'
                              }`} 
                            />
                          </button>
                        ))}
                      </div>
                      <span className="text-[12px] font-bold text-vne-red">
                        {userRating === 5 ? 'Tuyệt vời' : userRating === 4 ? 'Rất tốt' : userRating === 3 ? 'Bình thường' : userRating === 2 ? 'Tạm ổn' : 'Chưa tốt'}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-bold text-vne-title">Họ tên:</span>
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Nhập họ tên của bạn..."
                        className="px-2.5 py-1 border border-vne-border rounded-[2px] bg-white text-[13px] focus:outline-none focus:border-vne-red w-48"
                      />
                    </div>
                  </div>

                  <div className="relative border-l-[3px] border-vne-red bg-white border border-y-vne-border border-r-vne-border">
                    <textarea
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Chia sẻ ý kiến của bạn về quán ăn này..."
                      rows={3}
                      className="w-full p-3 text-[14px] bg-transparent focus:outline-none placeholder-vne-gray resize-none pr-10"
                    />
                    <div className="absolute right-3.5 bottom-3.5 text-[18px] cursor-default select-none">
                      😊
                    </div>
                  </div>

                  <div className="flex justify-end mt-3">
                    {isEditing && (
                      <button
                        onClick={handleCancelEdit}
                        className="px-4 py-1.5 mr-2 border border-vne-border text-vne-gray text-[13px] rounded-[2px] hover:bg-vne-bg font-medium transition-colors"
                      >
                        Hủy chỉnh sửa
                      </button>
                    )}
                    <button
                      onClick={handleSubmitReview}
                      disabled={!commentText.trim() || !userName.trim()}
                      className={`px-5 py-1.5 bg-vne-red text-white text-[13px] rounded-[2px] font-bold transition-colors ${
                        (!commentText.trim() || !userName.trim()) ? 'opacity-40 cursor-not-allowed' : 'hover:bg-opacity-95 cursor-pointer'
                      }`}
                    >
                      {isEditing ? 'Cập nhật đánh giá' : 'Gửi ý kiến'}
                    </button>
                  </div>
                </div>

                {/* Tabs selection */}
                <div className="flex items-center gap-6 border-b border-vne-border mb-5">
                  <button
                    onClick={() => setActiveTab('quan-tam')}
                    className={`pb-2.5 text-[14px] font-bold transition-colors relative focus:outline-none cursor-pointer ${
                      activeTab === 'quan-tam' ? 'text-vne-red' : 'text-vne-gray hover:text-vne-title'
                    }`}
                  >
                    Quan tâm nhất
                    {activeTab === 'quan-tam' && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-vne-red" />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab('moi-nhat')}
                    className={`pb-2.5 text-[14px] font-bold transition-colors relative focus:outline-none cursor-pointer ${
                      activeTab === 'moi-nhat' ? 'text-vne-red' : 'text-vne-gray hover:text-vne-title'
                    }`}
                  >
                    Mới nhất
                    {activeTab === 'moi-nhat' && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-vne-red" />
                    )}
                  </button>
                </div>

                {/* Reviews List container */}
                <div className="space-y-5">
                  {/* Highlight user review at the TOP if it exists */}
                  {userReview && (
                    <div className="p-4 bg-red-50/40 border border-red-100 rounded-[2px] relative mb-4">
                      <div className="absolute top-3 right-3 bg-vne-red text-white px-2 py-0.5 text-[10px] font-bold rounded-[2px] uppercase">
                        Đánh giá của bạn
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-vne-red text-white flex items-center justify-center font-bold text-[15px] shrink-0">
                          {userReview.avatarText}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div>
                            <span className="font-bold text-[14px] text-vne-title mr-2">{userReview.userName}</span>
                            <span className="inline-flex gap-0.5 items-center bg-[#fdf8e2] px-1.5 py-0.5 rounded text-[11px] text-[#f5a623] font-bold mr-2 border border-[#f5e6a3]">
                              <Star className="w-3 h-3 fill-current" />
                              {userReview.rating} sao
                            </span>
                            <p className="inline text-[14px] text-vne-text leading-relaxed">
                              {userReview.content}
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between text-[12px] text-vne-gray mt-2.5">
                            <div className="flex items-center gap-4">
                              <button
                                onClick={() => handleLike(userReview.id)}
                                className={`flex items-center gap-1 hover:text-vne-red transition-colors cursor-pointer ${
                                  userReview.hasLiked ? 'text-vne-red font-semibold' : ''
                                }`}
                              >
                                <span>👍 Thích</span>
                                {userReview.likes > 0 && <span className="bg-gray-100 px-1 rounded text-vne-gray">{userReview.likes}</span>}
                              </button>
                              
                              <button 
                                onClick={() => toggleReplies(userReview.id)}
                                className="hover:text-vne-red transition-colors cursor-pointer"
                              >
                                Trả lời
                              </button>

                              <button
                                onClick={() => handleEditReview(userReview)}
                                className="text-vne-red hover:underline font-bold transition-colors flex items-center gap-1 cursor-pointer"
                              >
                                ✏️ Sửa đánh giá
                              </button>
                            </div>
                            
                            <span>{userReview.time}</span>
                          </div>

                          {/* Replies block for User Review */}
                          {userReview.repliesCount > 0 && (
                            <div className="mt-2.5">
                              <button
                                onClick={() => toggleReplies(userReview.id)}
                                className="text-[12px] text-vne-red font-semibold hover:underline flex items-center gap-1"
                              >
                                ↳ {expandedReplies[userReview.id] ? 'Ẩn' : userReview.repliesCount} phản hồi
                              </button>
                              
                              {expandedReplies[userReview.id] && userReview.replies && (
                                <div className="mt-2.5 pl-4 border-l-2 border-vne-border space-y-2.5">
                                  {userReview.replies.map((reply, rIdx) => (
                                    <div key={rIdx} className="text-[13px] bg-white p-2.5 border border-vne-border rounded-[2px]">
                                      <span className="font-bold text-vne-title mr-2">{reply.userName}</span>
                                      <p className="inline text-vne-text leading-relaxed">{reply.content}</p>
                                      <div className="text-[11px] text-vne-gray mt-1">{reply.time}</div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}

                          {/* Reply text-box */}
                          {expandedReplies[userReview.id] && (
                            <div className="mt-3">
                              <div className="flex gap-2">
                                <input
                                  type="text"
                                  placeholder="Viết phản hồi..."
                                  className="flex-1 px-3 py-1.5 border border-vne-border rounded-[2px] text-[13px] focus:outline-none focus:border-vne-red bg-white"
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                      handleAddReply(userReview.id, (e.target as HTMLInputElement).value);
                                      (e.target as HTMLInputElement).value = '';
                                    }
                                  }}
                                />
                                <button 
                                  onClick={(e) => {
                                    const input = (e.currentTarget.previousSibling as HTMLInputElement);
                                    handleAddReply(userReview.id, input.value);
                                    input.value = '';
                                  }}
                                  className="px-4 py-1.5 bg-vne-red text-white text-[12px] font-bold rounded-[2px] hover:bg-opacity-95 cursor-pointer"
                                >
                                  Gửi
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Render standard reviews list */}
                  {(() => {
                    const sorted = [...reviews].sort((a, b) => {
                      if (activeTab === 'quan-tam') {
                        return b.likes - a.likes;
                      } else {
                        // Simply return reverse of original array to mock newest
                        return b.id.localeCompare(a.id);
                      }
                    });

                    return sorted.map((review) => (
                      <div key={review.id} className="pb-5 border-b border-vne-border last:border-b-0">
                        <div className="flex gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-100 border border-vne-border flex items-center justify-center font-bold text-vne-gray text-[15px] shrink-0">
                            {review.avatarText}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div>
                              <span className="font-bold text-[14px] text-vne-title mr-2">{review.userName}</span>
                              <span className="inline-flex gap-0.5 items-center bg-[#fdf8e2] px-1.5 py-0.5 rounded text-[11px] text-[#f5a623] font-bold mr-2 border border-[#f5e6a3]">
                                <Star className="w-3 h-3 fill-current" />
                                {review.rating} sao
                              </span>
                              <p className="inline text-[14px] text-vne-text leading-relaxed">
                                {review.content}
                              </p>
                            </div>

                            <div className="flex items-center justify-between text-[12px] text-vne-gray mt-2">
                              <div className="flex items-center gap-4">
                                <button
                                  onClick={() => handleLike(review.id)}
                                  className={`flex items-center gap-1 hover:text-vne-red transition-colors cursor-pointer ${
                                    review.hasLiked ? 'text-vne-red font-semibold' : ''
                                  }`}
                                >
                                  <span>👍 Thích</span>
                                  {review.likes > 0 && <span className="bg-gray-100 px-1 rounded text-vne-gray">{review.likes}</span>}
                                </button>
                                
                                <button 
                                  onClick={() => toggleReplies(review.id)}
                                  className="hover:text-vne-red transition-colors cursor-pointer"
                                >
                                  Trả lời
                                </button>
                                
                                <button className="hover:text-vne-red transition-colors text-[11px] cursor-pointer">
                                  Báo vi phạm
                                </button>
                              </div>
                              
                              <span>{review.time}</span>
                            </div>

                            {/* Replies List */}
                            {review.repliesCount > 0 && (
                              <div className="mt-2.5">
                                <button
                                  onClick={() => toggleReplies(review.id)}
                                  className="text-[12px] text-vne-red font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                                >
                                  ↳ {expandedReplies[review.id] ? 'Ẩn' : review.repliesCount} phản hồi
                                </button>
                                
                                {expandedReplies[review.id] && review.replies && (
                                  <div className="mt-2.5 pl-4 border-l-2 border-vne-border space-y-2.5 bg-[#fcfcfc] p-3 rounded-[2px] border border-vne-border">
                                    {review.replies.map((reply, rIdx) => (
                                      <div key={rIdx} className="text-[13px]">
                                        <span className="font-bold text-vne-title mr-2">{reply.userName}</span>
                                        <p className="inline text-vne-text leading-relaxed">{reply.content}</p>
                                        <div className="text-[11px] text-vne-gray mt-1">{reply.time}</div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Write Reply section */}
                            {expandedReplies[review.id] && (
                              <div className="mt-3">
                                <div className="flex gap-2">
                                  <input
                                    type="text"
                                    placeholder="Viết phản hồi..."
                                    className="flex-1 px-3 py-1.5 border border-vne-border rounded-[2px] text-[13px] focus:outline-none focus:border-vne-red bg-white"
                                    onKeyDown={(e) => {
                                      if (e.key === 'Enter') {
                                        handleAddReply(review.id, (e.target as HTMLInputElement).value);
                                        (e.target as HTMLInputElement).value = '';
                                      }
                                    }}
                                  />
                                  <button 
                                    onClick={(e) => {
                                      const input = (e.currentTarget.previousSibling as HTMLInputElement);
                                      handleAddReply(review.id, input.value);
                                      input.value = '';
                                    }}
                                    className="px-4 py-1.5 bg-vne-red text-white text-[12px] font-bold rounded-[2px] hover:bg-opacity-95 cursor-pointer"
                                  >
                                    Gửi
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ));
                  })()}
                </div>
              </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 shrink-0 space-y-6">
          {/* Map mockup */}
          <div className="bg-vne-bg rounded-[4px] h-40 flex items-center justify-center relative overflow-hidden border border-vne-border group cursor-pointer">
            <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800')`}} />
            <div className="z-10 bg-white px-3 py-1.5 rounded-[2px] shadow-sm font-medium text-[13px] flex items-center group-hover:bg-vne-red group-hover:text-white transition-colors">
              <MapPin className="w-3 h-3 mr-1" />
              Xem trên bản đồ
            </div>
          </div>

          <div className="bg-white p-5 border border-vne-border">
            <h3 className="font-bold text-[14px] text-vne-title border-t border-vne-border pt-[15px] mb-3">
              Bài viết trên VnExpress
            </h3>
            <div className="space-y-3">
              <a href="#" className="block group">
                <h4 className="text-[13px] text-vne-title group-hover:text-vne-red line-clamp-2 leading-snug">
                  Vì sao khách sẵn sàng xếp hàng chờ ăn tại {restaurant.name}?
                </h4>
                <p className="text-[11px] text-vne-gray mt-1">Du lịch • 2 ngày trước</p>
              </a>
              <a href="#" className="block group">
                <h4 className="text-[13px] text-vne-title group-hover:text-vne-red line-clamp-2 leading-snug">
                  Top 5 quán ăn không thể bỏ qua khi đến {restaurant.province}
                </h4>
                <p className="text-[11px] text-vne-gray mt-1">Cẩm nang • 1 tuần trước</p>
              </a>
            </div>
          </div>

          {relatedRestaurants.length > 0 && (
            <div className="bg-white p-5 border border-vne-border">
              <h3 className="font-bold text-[14px] text-vne-title border-t border-vne-border pt-[15px] mb-3">
                Gợi ý cùng khu vực
              </h3>
              <div className="space-y-3">
                {relatedRestaurants.map(rel => (
                  <Link 
                    key={rel.id} 
                    to={`/${generateSlug(rel.name)}-${generateSlug(rel.province)}-${rel.id}.html`}
                    className="flex gap-2 group"
                  >
                    <img src={rel.thumbnail} alt={rel.name} className="w-[60px] h-[60px] object-cover rounded-[2px]" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[13px] text-vne-title group-hover:text-vne-red line-clamp-2 leading-tight">
                        {rel.name}
                      </h4>
                      <div className="flex items-center gap-1 text-[#f5a623] text-[11px] font-bold mt-0.5">
                        <Star className="w-2.5 h-2.5 fill-current" />
                        <span>{rel.rating}</span>
                      </div>
                      <p className="text-[11px] text-vne-gray line-clamp-1 mt-0.5">{rel.address}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
