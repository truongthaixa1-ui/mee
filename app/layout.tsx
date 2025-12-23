"use client";

import { motion, Variants, easeOut } from "framer-motion";
import { ArrowRight, Code, Globe, BarChart3, ShieldCheck, Zap, Layers } from "lucide-react";
import Link from "next/link";

// --- Animation Variants ---
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut, // ✅ TS hợp lệ
    },
  },
};

// --- Main Component ---
export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden selection:bg-blue-500 selection:text-white">
      {/* --- HEADER --- */}
      <header className="fixed top-0 w-full z-50 bg-opacity-80 backdrop-blur-md border-b border-white/10 bg-[#0a192f]/80">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            BlueSolutions.
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            <Link href="#services" className="hover:text-blue-400 transition">Dịch vụ</Link>
            <Link href="#about" className="hover:text-blue-400 transition">Về chúng tôi</Link>
            <Link href="#process" className="hover:text-blue-400 transition">Quy trình</Link>
          </nav>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-500/30">
            Liên hệ ngay
          </button>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 container mx-auto px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -z-10" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium">
            🚀 Giải pháp Digital toàn diện 2024
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Nâng tầm thương hiệu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
              Kỷ nguyên số
            </span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Blue Solutions Digital cung cấp các giải pháp thiết kế website, marketing và chuyển đổi số giúp doanh nghiệp của bạn bứt phá doanh thu.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-600/20 group">
              Tư vấn miễn phí
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
              Xem hồ sơ năng lực
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 bg-[#112240]/50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dịch vụ cốt lõi</h2>
            <p className="text-gray-400">Chúng tôi mang đến giải pháp công nghệ tinh gọn và hiệu quả nhất.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Thiết kế Website", desc: "Giao diện UI/UX độc quyền, chuẩn SEO, tối ưu trải nghiệm người dùng." },
              { icon: Code, title: "Phát triển phần mềm", desc: "Hệ thống Web App, Mobile App mạnh mẽ, bảo mật và mở rộng linh hoạt." },
              { icon: BarChart3, title: "Digital Marketing", desc: "Chiến lược SEO, Google Ads, Social Media giúp tăng trưởng doanh số." },
              { icon: ShieldCheck, title: "Bảo mật hệ thống", desc: "Giải pháp an toàn thông tin, bảo vệ dữ liệu doanh nghiệp tuyệt đối." },
              { icon: Zap, title: "Tối ưu hiệu suất", desc: "Tăng tốc độ tải trang, tối ưu Core Web Vitals cho trải nghiệm mượt mà." },
              { icon: Layers, title: "Branding", desc: "Xây dựng bộ nhận diện thương hiệu số chuyên nghiệp và ấn tượng." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-[#112240] border border-white/5 hover:border-blue-500/50 hover:bg-[#1a2f55] transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-20 border-y border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "500+", label: "Dự án hoàn thành" },
            { num: "98%", label: "Khách hàng hài lòng" },
            { num: "50+", label: "Chuyên gia" },
            { num: "24/7", label: "Hỗ trợ kỹ thuật" }
          ].map((stat, i) => (
            <div key={i}>
              <h4 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.num}</h4>
              <p className="text-blue-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Sẵn sàng bứt phá cùng Blue Solutions?</h2>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto">Đừng để đối thủ bỏ xa bạn. Hãy liên hệ với chúng tôi để nhận bản kế hoạch chuyển đổi số miễn phí.</p>
          <button className="bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
            Bắt đầu dự án ngay
          </button>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#020c1b] py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">BlueSolutions.</h3>
              <p className="text-gray-400 max-w-sm">
                Đối tác tin cậy trong hành trình chuyển đổi số. Chúng tôi kiến tạo giá trị thực qua các sản phẩm công nghệ chất lượng cao.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Liên kết</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-blue-400">Trang chủ</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Dịch vụ</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Blog công nghệ</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Tuyển dụng</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Liên hệ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contact@bluesolutionsdigital.com</li>
                <li>+84 909 123 456</li>
                <li>TP. Hồ Chí Minh, Việt Nam</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-600 text-sm pt-8 border-t border-white/5">
            © 2024 Blue Solutions Digital. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
