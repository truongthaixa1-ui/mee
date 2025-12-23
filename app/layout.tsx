"use client";

import { motion, Variants } from "framer-motion"; // Thêm Variants vào đây
import { 
  ArrowRight, 
  Code, 
  Globe, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  Layers, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";
import Link from "next/link";

// Định nghĩa kiểu dữ liệu Variants để ép TypeScript phải chấp nhận
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.33, 1, 0.68, 1] // Thay "easeOut" bằng mảng số (Cubic Bezier) để an toàn tuyệt đối
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a192f] text-white selection:bg-blue-500 selection:text-white">
      
      {/* --- 1. NAVIGATION BAR --- */}
      <header className="fixed top-0 w-full z-50 bg-[#0a192f]/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
          >
            BlueSolutions<span className="text-blue-500">.</span>
          </motion.div>
          
          <nav className="hidden md:flex space-x-10 text-sm font-medium text-gray-400">
            <a href="#services" className="hover:text-blue-400 transition-colors">Dịch vụ</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">Về chúng tôi</a>
            <a href="#process" className="hover:text-blue-400 transition-colors">Quy trình</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Liên hệ</a>
          </nav>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-500/25"
          >
            Bắt đầu ngay
          </motion.button>
        </div>
      </header>

      {/* --- 2. HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-40 px-6">
        {/* Trang trí nền (Background Ornaments) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs md:text-sm font-bold uppercase tracking-widest"
            >
              🚀 Kiến tạo tương lai số
            </motion.span>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]"
            >
              Nâng tầm doanh nghiệp <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                bằng công nghệ đột phá
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Chúng tôi cung cấp hệ sinh thái kỹ thuật số toàn diện: Từ thiết kế Web đỉnh cao đến chiến lược Marketing bền vững.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 justify-center">
              <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-blue-600/30 group">
                Khởi tạo dự án
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all backdrop-blur-sm">
                Hồ sơ năng lực
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. SERVICES SECTION --- */}
      <section id="services" className="py-24 bg-[#0d1d33]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-blue-500 font-bold mb-4 uppercase tracking-widest text-sm">Dịch vụ của chúng tôi</h2>
              <h3 className="text-3xl md:text-5xl font-bold">Giải pháp chuyên biệt cho từng doanh nghiệp</h3>
            </div>
            <p className="text-gray-400 max-w-xs pb-2">Hơn 5 năm kinh nghiệm thực chiến trên thị trường Digital toàn cầu.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Web Design", desc: "Website chuẩn UX/UI, tốc độ load dưới 1s và tối ưu hóa chuyển đổi cao." },
              { icon: Code, title: "Software Development", desc: "Xây dựng App và phần mềm quản lý doanh nghiệp (ERP, CRM) tùy chỉnh." },
              { icon: BarChart3, title: "Growth Marketing", desc: "Tăng trưởng traffic và doanh thu thông qua SEO, Facebook & Google Ads." },
              { icon: ShieldCheck, title: "Cyber Security", desc: "Bảo mật đa tầng, quét lỗ hổng và bảo vệ dữ liệu khách hàng tuyệt đối." },
              { icon: Zap, title: "Performance Optimize", desc: "Tối ưu hóa hạ tầng Server và Core Web Vitals giúp lên Top Google dễ dàng." },
              { icon: Layers, title: "Brand Identity", desc: "Thiết kế logo và bộ nhận diện thương hiệu số độc bản, ấn tượng." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-3xl bg-[#112240] border border-white/5 hover:border-blue-500/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-8 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                  <item.icon size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed mb-6">{item.desc}</p>
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm cursor-pointer hover:gap-4 transition-all uppercase tracking-tighter">
                  Tìm hiểu thêm <ArrowRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. WHY CHOOSE US --- */}
      <section id="about" className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Tại sao hơn 200+ đối tác tin tưởng Blue Solutions?</h2>
            <div className="space-y-6">
              {[
                "Cam kết tiến độ và chất lượng bằng hợp đồng.",
                "Đội ngũ kỹ sư trên 5 năm kinh nghiệm.",
                "Công nghệ mới nhất: Next.js, AI, Cloud SaaS.",
                "Hỗ trợ kỹ thuật 24/7 trọn đời dự án."
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-blue-500 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-indigo-900 p-1 rounded-[40px]"
          >
            <div className="bg-[#0a192f] rounded-[38px] p-10 md:p-16">
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <h5 className="text-5xl font-black text-white mb-2">95%</h5>
                  <p className="text-blue-400 font-medium">Khách hàng quay lại</p>
                </div>
                <div>
                  <h5 className="text-5xl font-black text-white mb-2">500+</h5>
                  <p className="text-blue-400 font-medium">Dự án thành công</p>
                </div>
                <div>
                  <h5 className="text-5xl font-black text-white mb-2">12+</h5>
                  <p className="text-blue-400 font-medium">Quốc gia tin dùng</p>
                </div>
                <div>
                  <h5 className="text-5xl font-black text-white mb-2">24/7</h5>
                  <p className="text-blue-400 font-medium">Support tức thì</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 5. CTA & CONTACT --- */}
      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl bg-blue-600 rounded-[40px] p-10 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-6">Bạn có ý tưởng? <br />Hãy cùng hiện thực hóa.</h2>
              <p className="text-blue-100 text-lg mb-10">Nhận báo giá chi tiết và bản thảo thiết kế sơ bộ trong vòng 24h làm việc.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white font-bold">
                  <Mail size={20} /> contact@bluesolutionsdigital.com
                </div>
                <div className="flex items-center gap-4 text-white font-bold">
                  <Phone size={20} /> +84 909 123 456
                </div>
                <div className="flex items-center gap-4 text-white font-bold">
                  <MapPin size={20} /> Landmark 81, TP. Hồ Chí Minh
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl text-gray-900">
              <form className="space-y-4">
                <input type="text" placeholder="Họ và tên" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="email" placeholder="Email liên hệ" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <textarea placeholder="Yêu cầu của bạn (Ví dụ: Thiết kế web bán hàng)" rows={4} className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                <button className="w-full bg-[#0a192f] text-white py-5 rounded-xl font-black text-lg hover:bg-black transition-colors">
                  Gửi yêu cầu ngay
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. FOOTER --- */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Blue Solutions Digital. Build with ❤️ using Next.js & Vercel.
          </p>
        </div>
      </footer>
    </main>
  );
}