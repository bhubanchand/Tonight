
import post1 from "@/blogs/1";
import post2 from "@/blogs/2";
import post3 from "@/blogs/3";
import post4 from "@/blogs/4";
import post5 from "@/blogs/5";
import post6 from "@/blogs/6";
import post7 from "@/blogs/7";
import post8 from "@/blogs/8";
import post9 from "@/blogs/9";
import post10 from "@/blogs/10";
import post11 from "@/blogs/11";
import post12 from "@/blogs/12";
import post13 from "@/blogs/13";
import post14 from "@/blogs/14";
import post15 from "@/blogs/15";
import post16 from "@/blogs/16";
import post17 from "@/blogs/17";
import post18 from "@/blogs/18";
import post19 from "@/blogs/19";
import post20 from "@/blogs/20";
import post21 from "@/blogs/21";
import post22 from "@/blogs/22";
import post23 from "@/blogs/23";
import post24 from "@/blogs/24";
import post25 from "@/blogs/25";
import post26 from "@/blogs/26";
import post27 from "@/blogs/27";
import post28 from "@/blogs/28";
import post29 from "@/blogs/29";
import post30 from "@/blogs/30";
import post31 from "@/blogs/31";
import post32 from "@/blogs/32";
import post33 from "@/blogs/33";
import post34 from "@/blogs/34";
import post35 from "@/blogs/35";
import post36 from "@/blogs/36";
import post37 from "@/blogs/37";
import post38 from "@/blogs/38";
import post39 from "@/blogs/39";
import post40 from "@/blogs/40";
import post41 from "@/blogs/41";
import post42 from "@/blogs/42";
import post43 from "@/blogs/43";
import post44 from "@/blogs/44";
import post45 from "@/blogs/45";
import post46 from "@/blogs/46";
import post47 from "@/blogs/47";
import post48 from "@/blogs/48";
import post49 from "@/blogs/49";
import post50 from "@/blogs/50";
import post51 from "@/blogs/51";
import post52 from "@/blogs/52";
import post53 from "@/blogs/53";
import post54 from "@/blogs/54";
import post55 from "@/blogs/55";
import post56 from "@/blogs/56";
import post57 from "@/blogs/57";
import post58 from "@/blogs/58";
import post59 from "@/blogs/59";
import post60 from "@/blogs/60";
import post61 from "@/blogs/61";
import post62 from "@/blogs/62";
import post63 from "@/blogs/63";
import post64 from "@/blogs/64";
import post65 from "@/blogs/65";
import post66 from "@/blogs/66";
import post67 from "@/blogs/67";
import post68 from "@/blogs/68";
import post69 from "@/blogs/69";
import post70 from "@/blogs/70";
import post71 from "@/blogs/71";
import post72 from "@/blogs/72";
import post73 from "@/blogs/73";
import post74 from "@/blogs/74";
import post75 from "@/blogs/75";
import post76 from "@/blogs/76";
import post77 from "@/blogs/77";
import post78 from "@/blogs/78";
import post79 from "@/blogs/79";
import post80 from "@/blogs/80";
import post81 from "@/blogs/81";
import post82 from "@/blogs/82";
import post83 from "@/blogs/83";
import post84 from "@/blogs/84";
import post85 from "@/blogs/85";
import post86 from "@/blogs/86";
import post87 from "@/blogs/87";
import post88 from "@/blogs/88";
import post89 from "@/blogs/89";
import post90 from "@/blogs/90";
import post91 from "@/blogs/91";
import post92 from "@/blogs/92";
import post93 from "@/blogs/93";
import post94 from "@/blogs/94";
import post95 from "@/blogs/95";
import post96 from "@/blogs/96";
import post97 from "@/blogs/97";
import post98 from "@/blogs/98";
import post99 from "@/blogs/99";
import post100 from "@/blogs/100";

// Blog data interface
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  createdAt: string;
  readTime: string;
  featured: boolean;
  featuredSize?: "large" | "medium" | "small";
}

// Import all blog posts - organizing them in dedicated files
export const blogPosts: BlogPost[] = [
post1,  
post2,  
post3,  
post4,  
post5,  
post6,  
post7,  
post8,  
post9,  
post10,  
post11,  
post12,  
post13,  
post14,  
post15,  
post16,  
post17,  
post18,  
post19,  
post20,  
post21,  
post22,  
post23,  
post24,  
post25,  
post26,  
post27,  
post28,  
post29,  
post30,  
post31,  
post32,  
post33,  
post34,  
post35,  
post36,  
post37,  
post38,  
post39,  
post40,  
post41,  
post42,  
post43,  
post44,  
post45,  
post46,  
post47,  
post48,  
post49,  
post50,  
post51,  
post52,  
post53,  
post54,  
post55,  
post56,  
post57,  
post58,  
post59,  
post60,  
post61,  
post62,  
post63,  
post64,  
post65,  
post66,  
post67,  
post68,  
post69,  
post70,  
post71,  
post72,  
post73,  
post74,  
post75,  
post76,  
post77,  
post78,  
post79,  
post80,  
post81,  
post82,  
post83,  
post84,  
post85,  
post86,  
post87,  
post88,  
post89,  
post90,  
post91,  
post92,  
post93,  
post94,  
post95,  
post96,  
post97,  
post98,  
post99,  
post100  
];

// Sorting by createdAt in descending order (newest first)
export const sortBlogPosts = (posts: BlogPost[]): BlogPost[] => {
  const now = new Date().getTime(); 

  return [...posts]
    .filter(post => post.createdAt && new Date(post.createdAt).getTime() <= now) 
    .sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA; // Sort newest first
    });
};

// Get featured posts ensuring we have the right sizes and limits
export const getFeaturedPosts = (): BlogPost[] => {
  const allFeaturedPosts = sortBlogPosts(blogPosts.filter((post) => post.featured));
  
  // First, find the most recent large featured post
  const largeFeaturedPost = allFeaturedPosts.find(post => post.featuredSize === "large");
  
  // If no large featured post exists, take the most recent featured post and make it large
  const mainFeaturedPost = largeFeaturedPost 
    ? largeFeaturedPost 
    : (allFeaturedPosts.length > 0 
      ? { ...allFeaturedPosts[0], featuredSize: "large" as const } 
      : null);
  
  // Get medium featured posts (limit to 5)
  const mediumFeaturedPosts = allFeaturedPosts
    .filter(post => post.id !== (mainFeaturedPost?.id || 0))
    .slice(0, 5)
    .map(post => ({ ...post, featuredSize: "medium" as const }));
  
  // Combine large post with medium posts, ensuring we don't exceed 6 total
  const result = mainFeaturedPost ? [mainFeaturedPost, ...mediumFeaturedPosts] : [...mediumFeaturedPosts];
  
  // Limit to 6 total featured posts (1 large + 5 medium)
  return result.slice(0, 6);
};

// Utility functions
export const getRecentPosts = (count: number = 6): BlogPost[] => {
  return sortBlogPosts(blogPosts).slice(0, count);
};

export const getPostsByCategory = (category: string, count?: number): BlogPost[] => {
  const filteredPosts = blogPosts.filter((post) => post.category === category);
  return count ? sortBlogPosts(filteredPosts).slice(0, count) : sortBlogPosts(filteredPosts);
};

export const getRelatedPosts = (currentPostId: number, count: number = 3): BlogPost[] => {
  const currentPost = blogPosts.find((post) => post.id === currentPostId);
  if (!currentPost) return [];

  return sortBlogPosts(
    blogPosts.filter((post) => post.id !== currentPostId && post.category === currentPost.category)
  ).slice(0, count);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};
