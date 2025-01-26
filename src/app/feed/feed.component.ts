import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';

interface FeedPost {
  id: number;
  restaurantName: string;
  username: string;
  description: string;
  videoUrl: string;
  likes: number;
  comments: number;
  isLiked: boolean;
  isPaused: boolean;
}

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements AfterViewInit {
  @ViewChildren('videoPlayer') videoPlayers!: QueryList<ElementRef<HTMLVideoElement>>;
  
  currentVideoIndex: number = 0;
  private touchStartY: number = 0;
  private readonly SWIPE_THRESHOLD = 50;
  private scrollCooldown = false;
  
  posts: FeedPost[] = [
    {
      id: 1,
      restaurantName: 'Italian Kitchen',
      username: '@ItalianKitchen',
      description: 'The most satisfying Job #food #italian #foodlovers',
      videoUrl: 'assets/videos/3298480-uhd_2160_4096_25fps.mp4',
      likes: 328700,
      comments: 578,
      isLiked: false,
      isPaused: false
    },
    {
      id: 2,
      restaurantName: 'French Bistro',
      username: '@FrenchBistro',
      description: 'Perfect croissant folding technique 🥐 #frenchfood #bakery',
      videoUrl: 'assets/videos/3298790-uhd_2160_4096_25fps.mp4',
      likes: 245300,
      comments: 892,
      isLiked: false,
      isPaused: false
    },
    {
      id: 3,
      restaurantName: 'Sushi Master',
      username: '@SushiMaster',
      description: 'Fresh salmon nigiri preparation 🍣 #sushi #japanese',
      videoUrl: 'assets/videos/6091108-uhd_2160_4096_30fps.mp4',
      likes: 567800,
      comments: 1243,
      isLiked: false,
      isPaused: false
    },
    {
      id: 4,
      restaurantName: 'Pasta Paradise',
      username: '@PastaParadise',
      description: 'Homemade pasta making process 🍝 #pasta #italian',
      videoUrl: 'assets/videos/3298480-uhd_2160_4096_25fps.mp4',
      likes: 189400,
      comments: 456,
      isLiked: false,
      isPaused: false
    }
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      this.playCurrentVideo();
    }, 0);
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartY = event.touches[0].clientY;
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    event.preventDefault();
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    const touchEndY = event.changedTouches[0].clientY;
    const deltaY = touchEndY - this.touchStartY;

    if (Math.abs(deltaY) > this.SWIPE_THRESHOLD) {
      if (deltaY > 0 && this.currentVideoIndex > 0) {
        // Swipe down - go to previous video
        this.currentVideoIndex--;
        this.playCurrentVideo();
      } else if (deltaY < 0 && this.currentVideoIndex < this.posts.length - 1) {
        // Swipe up - go to next video
        this.currentVideoIndex++;
        this.playCurrentVideo();
      }
    }
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    event.preventDefault();
    
    if (this.scrollCooldown) return;
    this.scrollCooldown = true;

    const deltaY = event.deltaY;
    const threshold = 50; // Adjust this value to control sensitivity

    if (Math.abs(deltaY) > threshold) {
      if (deltaY > 0 && this.currentVideoIndex < this.posts.length - 1) {
        // Scroll down - go to next video
        this.currentVideoIndex++;
        this.playCurrentVideo();
      } else if (deltaY < 0 && this.currentVideoIndex > 0) {
        // Scroll up - go to previous video
        this.currentVideoIndex--;
        this.playCurrentVideo();
      }
    }

    setTimeout(() => {
      this.scrollCooldown = false;
    }, 500);
  }

  playCurrentVideo() {
    this.videoPlayers.forEach((player, index) => {
      const video = player.nativeElement;
      if (index === this.currentVideoIndex) {
        video.currentTime = 0;
        video.play();
        this.posts[index].isPaused = false;
      } else {
        video.pause();
        video.currentTime = 0;
        this.posts[index].isPaused = true;
      }
    });
  }

  toggleVideo(post: FeedPost, video: HTMLVideoElement) {
    if (video.paused) {
      video.play();
      post.isPaused = false;
    } else {
      video.pause();
      post.isPaused = true;
    }
  }

  formatNumber(num: number): string {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  }

  toggleLike(post: FeedPost) {
    post.isLiked = !post.isLiked;
    post.likes += post.isLiked ? 1 : -1;
  }
} 