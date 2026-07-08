import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { RestaurantCard } from '../components/RestaurantCard';
import { AdvancedSearch } from '../components/AdvancedSearch';
import { mockRestaurants } from '../data/restaurants';
import { generateSlug } from '../utils/slugify';
import { Filter, ChevronDown, Check } from 'lucide-react';

export const ListingPage = () => {
  const { slug, dishSlug } = useParams<{ slug: string; dishSlug: string }>();
  const provinceSlug = slug;
  const [layout, setLayout] = useState<'grid' | 'list'>('list');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const getProvinceName = (slug?: string) => {
    const map: Record<string, string> = {
      'ha-noi': 'Hà Nội',
      'da-nang': 'Đà Nẵng',
      'nha-trang': 'Nha Trang',
      'hue': 'Huế',
      'tphcm': 'TP.HCM',
      'da-lat': 'Đà Lạt',
      'vung-tau': 'Vũng Tàu',
      'hoi-an': 'Hội An',
      'quang-nam': 'Quảng Nam',
      'lam-dong': 'Lâm Đồng',
      'kien-giang': 'Kiên Giang',
      'khanh-hoa': 'Khánh Hòa',
      'thua-thien-hue': 'Thừa Thiên Huế'
    };
    return map[slug || ''] || 'Địa phương';
  };

  const getDishName = (slug?: string) => {
    const map: Record<string, string> = {
      'quan-pho': 'Phở',
      'quan-mi-quang': 'Mì Quảng',
      'quan-banh-xeo': 'Bánh xèo',
      'quan-bun-bo-hue': 'Bún bò Huế',
      'quan-bun-cha': 'Bún chả',
      'quan-com-tam': 'Cơm tấm',
      'quan-hu-tieu': 'Hủ tiếu',
      'quan-lau-ga-la-e': 'Lẩu gà lá é',
      'quan-bun-dau': 'Bún đậu',
      'quan-banh-khot': 'Bánh khọt',
      'quan-banh-cuon': 'Bánh cuốn',
      'quan-goi-cuon': 'Gỏi cuốn',
      'quan-banh-mi': 'Bánh mì',
      'quan-bun-rieu': 'Bún riêu'
    };
    return map[slug || ''] || 'Món ăn';
  };

  const displayDish = getDishName(dishSlug);
  const displayProvince = getProvinceName(provinceSlug);

  // Filter restaurants by criteria (mocking the behavior)
  const filteredRestaurants = mockRestaurants.filter(r => {
    // If it's a specific dish listing, only show restaurants with that signature dish
    if (dishSlug && dishSlug !== 'all') {
      const targetDishSlug = dishSlug.replace('quan-', '');
      const isDishMatch = r.signatureDishes.some(d => {
        const dSlug = generateSlug(d);
        return dSlug.includes(targetDishSlug) || targetDishSlug.includes(dSlug);
      });
      if (!isDishMatch) return false;
    }
    // Fallback: just show restaurants in the province or area
    if (provinceSlug) {
      const pSlug = generateSlug(r.province);
      const aSlug = r.area ? generateSlug(r.area) : '';
      if (pSlug === provinceSlug || aSlug === provinceSlug || (pSlug === 'tphcm' && provinceSlug === 'tp-hcm') || (pSlug === 'tp-hcm' && provinceSlug === 'tphcm')) {
        return true;
      }
    }
    return false;
  });

  const filters = [
    { id: 'price', label: 'Giá cả' },
    { id: 'type', label: 'Loại hình' },
    { id: 'amenity', label: 'Tiện ích' },
    { id: 'award', label: 'Giải thưởng' },
  ];

  const relatedDishes = [
    { name: 'Bún chả cá', slug: 'quan-bun-cha-ca' },
    { name: 'Bánh tráng cuốn thịt heo', slug: 'quan-banh-trang-thit-heo' },
    { name: 'Hải sản', slug: 'quan-hai-san' },
    { name: 'Bánh xèo', slug: 'quan-banh-xeo' }
  ];

  const isRestaurantInCurrentProvince = (r: typeof mockRestaurants[0]) => {
    if (!provinceSlug) return false;
    const pSlug = generateSlug(r.province);
    const aSlug = r.area ? generateSlug(r.area) : '';
    return pSlug === provinceSlug || aSlug === provinceSlug || (pSlug === 'tphcm' && provinceSlug === 'tp-hcm') || (pSlug === 'tp-hcm' && provinceSlug === 'tphcm');
  };

  const allDishes = [
    { name: 'Phở', slug: 'quan-pho' },
    { name: 'Mì Quảng', slug: 'quan-mi-quang' },
    { name: 'Bánh xèo', slug: 'quan-banh-xeo' },
    { name: 'Bún bò Huế', slug: 'quan-bun-bo-hue' },
    { name: 'Bún chả', slug: 'quan-bun-cha' },
    { name: 'Cơm tấm', slug: 'quan-com-tam' },
    { name: 'Hủ tiếu', slug: 'quan-hu-tieu' },
    { name: 'Lẩu gà lá é', slug: 'quan-lau-ga-la-e' },
    { name: 'Bún đậu', slug: 'quan-bun-dau' },
    { name: 'Bánh khọt', slug: 'quan-banh-khot' },
    { name: 'Bánh cuốn', slug: 'quan-banh-cuon' },
    { name: 'Gỏi cuốn', slug: 'quan-goi-cuon' },
    { name: 'Bánh mì', slug: 'quan-banh-mi' },
    { name: 'Bún riêu', slug: 'quan-bun-rieu' }
  ];

  const otherDishLists = allDishes.filter(d => {
    if (d.slug === dishSlug) return false;

    const targetDishSlug = d.slug.replace('quan-', '');
    return mockRestaurants.some(r => {
      if (!isRestaurantInCurrentProvince(r)) return false;
      return r.signatureDishes.some(sd => {
        const sdSlug = generateSlug(sd);
        return sdSlug.includes(targetDishSlug) || targetDishSlug.includes(sdSlug);
      });
    });
  });

  const otherListsWithData = otherDishLists.map(d => {
    const targetDishSlug = d.slug.replace('quan-', '');
    const matchingRestaurants = mockRestaurants.filter(r => {
      if (!isRestaurantInCurrentProvince(r)) return false;
      return r.signatureDishes.some(sd => {
        const sdSlug = generateSlug(sd);
        return sdSlug.includes(targetDishSlug) || targetDishSlug.includes(sdSlug);
      });
    });

    const representativeImage = matchingRestaurants[0]?.thumbnail || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600';
    
    return {
      name: d.name,
      slug: d.slug,
      count: matchingRestaurants.length,
      image: representativeImage,
      description: `Tổng hợp những địa chỉ bán ${d.name.toLowerCase()} ngon nức tiếng và chuẩn vị nhất tại ${displayProvince}.`
    };
  });

  const displayedIds = new Set(filteredRestaurants.map(r => r.id));
  const otherRestaurantsAtLocation = mockRestaurants.filter(r => {
    return isRestaurantInCurrentProvince(r) && !displayedIds.has(r.id);
  });

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
      <AdvancedSearch />
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 min-w-0">
        <Breadcrumb 
          items={[
            { label: displayProvince, url: `/${provinceSlug}` },
            { label: `Quán ${displayDish}` }
          ]} 
        />

        <div className="mb-5">
          <h1 className="text-[24px] font-bold text-vne-title mb-2 leading-[1.2]">
            {displayDish} tại {displayProvince}
          </h1>
          <p className="text-vne-gray text-[14px] leading-relaxed">
            Khám phá danh sách các quán {displayDish.toLowerCase()} ngon và được đánh giá cao tại {displayProvince}.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-vne-bg p-3 rounded-[2px] border border-vne-border mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[14px] font-medium text-vne-gray mr-2 flex items-center">
              <Filter className="w-4 h-4 mr-1" /> Lọc theo:
            </span>
            {filters.map(f => (
              <button 
                key={f.id}
                onClick={() => setActiveFilter(activeFilter === f.id ? null : f.id)}
                className={`px-3 py-1.5 text-[14px] rounded-[2px] border ${
                  activeFilter === f.id 
                    ? 'border-vne-red text-vne-red bg-white font-medium' 
                    : 'border-vne-border text-[#444] bg-white hover:text-vne-red'
                } flex items-center transition-colors`}
              >
                {f.label} <ChevronDown className="w-3 h-3 ml-1" />
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2 border-l border-vne-border pl-4 hidden sm:flex">
            <button 
              onClick={() => setLayout('list')}
              className={`p-1.5 rounded-[2px] ${layout === 'list' ? 'bg-vne-border text-vne-title' : 'text-vne-gray hover:text-[#444]'}`}
              title="Danh sách"
            >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
          </button>
          <button 
            onClick={() => setLayout('grid')}
            className={`p-1.5 rounded-[2px] ${layout === 'grid' ? 'bg-vne-border text-vne-title' : 'text-vne-gray hover:text-[#444]'}`}
            title="Lưới"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          </button>
        </div>
      </div>

      {/* Active Filter Dropdown Mock */}
      {activeFilter && (
        <div className="bg-white border border-vne-border rounded-[2px] shadow-lg p-4 mb-6 animate-in slide-in-from-top-2">
          <div className="flex flex-wrap gap-3">
            {activeFilter === 'price' && ['Bình dân', 'Trung cấp', 'Cao cấp'].map(p => (
              <label key={p} className="flex items-center gap-2 text-[14px] cursor-pointer hover:text-vne-red px-2 py-1">
                <input type="checkbox" className="accent-vne-red w-4 h-4" /> {p}
              </label>
            ))}
            {activeFilter === 'amenity' && ['Có chỗ đỗ ô tô', 'Có điều hòa', 'Mở xuyên đêm', 'Phù hợp trẻ em'].map(a => (
              <label key={a} className="flex items-center gap-2 text-[14px] cursor-pointer hover:text-vne-red px-2 py-1">
                <input type="checkbox" className="accent-vne-red w-4 h-4" /> {a}
              </label>
            ))}
            {activeFilter === 'award' && ['Michelin Guide', 'Top Review VnE', 'Quán ăn lâu đời'].map(a => (
              <label key={a} className="flex items-center gap-2 text-[14px] cursor-pointer hover:text-vne-red px-2 py-1">
                <input type="checkbox" className="accent-vne-red w-4 h-4" /> {a}
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      <div className="mb-6">
        <h2 className="text-[16px] font-bold text-vne-title mb-4">
          Hiển thị {filteredRestaurants.length} kết quả
        </h2>
        <div className={`grid gap-4 ${layout === 'grid' ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} layout={layout} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-vne-bg rounded-[2px] border border-dashed border-vne-border">
              <p className="text-vne-gray text-[14px]">Không tìm thấy quán ăn nào phù hợp.</p>
            </div>
          )}
        </div>
      </div>

      {/* Danh sách nhà hàng khác */}
      {otherListsWithData.length > 0 && (
        <div className="mt-8">
          <div className="flex items-baseline gap-2 border-b border-vne-border pb-3 mb-5">
            <span className="w-1.5 h-5 bg-vne-red inline-block self-center mr-1"></span>
            <h3 className="text-[18px] sm:text-[20px] font-bold text-vne-title">Danh sách nhà hàng khác</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {otherListsWithData.map((list) => (
              <Link 
                key={list.slug} 
                to={`/${provinceSlug}/${list.slug}`}
                className="group flex gap-4 bg-white p-3 border border-vne-border hover:border-vne-red transition-all duration-200"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden relative bg-[#eee]">
                  <img 
                    src={list.image} 
                    alt={list.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-1 left-1 bg-vne-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[2px]">
                    {list.count} quán
                  </div>
                </div>
                <div className="flex flex-col justify-between py-0.5 min-w-0 flex-1">
                  <div>
                    <h4 className="font-bold text-vne-title text-[14px] sm:text-[15px] leading-snug group-hover:text-vne-red transition-colors line-clamp-2">
                      Top quán {list.name} ngon nhất tại {displayProvince}
                    </h4>
                    <p className="text-vne-gray text-[11px] sm:text-[12px] mt-1 line-clamp-2 leading-relaxed">
                      {list.description}
                    </p>
                  </div>
                  <span className="text-vne-red text-[11px] sm:text-[12px] font-bold group-hover:underline flex items-center gap-1 mt-1">
                    Xem danh sách →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Lateral Links (Cross-selling) */}
      <div className="mt-8 bg-vne-bg p-6 rounded-[2px] border border-vne-border">
        <h3 className="font-bold text-vne-title text-[14px] mb-4">Khám phá thêm đặc sản {displayProvince}</h3>
        <div className="flex flex-wrap gap-2">
          {relatedDishes.map(dish => (
            <Link 
              key={dish.slug} 
              to={`/${provinceSlug}/${dish.slug}`}
              className="bg-white border border-vne-border text-vne-gray hover:text-vne-red px-3 py-1.5 rounded-[12px] text-[11px] transition-colors"
            >
              {dish.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Các nhà hàng khác tại cùng địa điểm */}
      {otherRestaurantsAtLocation.length > 0 && (
        <div className="mt-8">
          <div className="flex items-baseline gap-2 border-b border-vne-border pb-3 mb-5">
            <span className="w-1.5 h-5 bg-vne-red inline-block self-center mr-1"></span>
            <h3 className="text-[18px] sm:text-[20px] font-bold text-vne-title">Các nhà hàng khác tại cùng địa điểm</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherRestaurantsAtLocation.slice(0, 8).map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} layout="grid" />
            ))}
          </div>
        </div>
      )}
      </div>
      </div>
    </div>
  );
};
