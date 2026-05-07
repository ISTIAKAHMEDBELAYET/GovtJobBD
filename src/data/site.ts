export const site = {
  name: "GovtJobBD",
  title: "সরকারি চাকরির খবর - সকল নিয়োগ - Govt Job BD Circular",
  description:
    "সরকারি চাকরির খবর, Govt Job Circular BD, প্রতিদিনের সকল নিয়োগ সার্কুলার, নিয়োগ বিজ্ঞপ্তি, আজকের চাকরির খবর",
  url: "https://govtjobbd.pages.dev",
};

export const navItems = [
  { label: "হোম", href: "/" },
  { label: "সকল চাকরি", href: "/category/all-bd-jobs/" },
  { label: "সরকারি চাকরি", href: "/category/government-job/" },
  { label: "ব্যাংক চাকরি", href: "/category/bank-job/" },
  {
    label: "প্রাইভেট চাকরি",
    href: "/category/private-job/",
    children: [
      { label: "এনজিও চাকরি", href: "/category/ngo-job/" },
      { label: "ফার্মাসিউটিক্যালস চাকরি", href: "/category/pharmaceuticals-job/" },
      { label: "গ্রুপ অব কোম্পানি চাকরি", href: "/category/group-company-job/" },
    ],
  },
  { label: "অনলাইন আবেদন", href: "/category/online-application/" },
  { label: "হট জবস", href: "/category/hot-jobs/" },
  { label: "নোটিশ", href: "/category/notice/" },
  {
    label: "আরও",
    href: "/category/all-bd-jobs/",
    children: [
      { label: "বিশ্ববিদ্যালয় চাকরি", href: "/category/university-job/" },
      { label: "ডিফেন্স জবস", href: "/category/defence-job/" },
      { label: "সাপ্তাহিক চাকরির খবর", href: "/category/weekly-job-news/" },
      { label: "Search জবস", href: "/search/" },
      { label: "Age Calculator", href: "/age-calculator/" },
    ],
  },
];

export const categories = [
  { name: "সকল চাকরি", slug: "all-bd-jobs" },
  { name: "সরকারি চাকরি", slug: "government-job" },
  { name: "অনলাইনে আবেদন", slug: "online-application" },
  { name: "ব্যাংক চাকরি", slug: "bank-job" },
  { name: "প্রাইভেট চাকরি", slug: "private-job" },
  { name: "এনজিও চাকরি", slug: "ngo-job" },
  { name: "ফার্মাসিউটিক্যালস চাকরি", slug: "pharmaceuticals-job" },
  { name: "গ্রুপ অব কোম্পানি চাকরি", slug: "group-company-job" },
  { name: "বিশ্ববিদ্যালয় চাকরি", slug: "university-job" },
  { name: "সাপ্তাহিক চাকরির খবর", slug: "weekly-job-news" },
  { name: "হট জবস", slug: "hot-jobs" },
  { name: "নোটিশ", slug: "notice" },
  { name: "ডিফেন্স জবস", slug: "defence-job" },
  { name: "Search জবস", slug: "search-jobs" },
  { name: "Age Calculator", slug: "age-calculator" },
];
