export const mockPosts = [
  {
    id: '1',
    content: 'Just shipped a new feature for our app! The team worked incredibly hard to make this happen. Excited to see how users respond to the new functionality. #coding #webdev',
    author: {
      name: 'Arsh',
      username: 'arsh_codes',
      avatar: 'https://file.aiquickdraw.com/imgcompressed/img/compressed_376bfd40f8dc044d0fbb0ad1ee0d2d70.webp'
    },
    createdAt: new Date().toISOString(),
    likes: 24,
    retweets: 8,
    replyCount: 5,
    liked: false,
    replies: [
      {
        id: 'r1',
        content: 'Congratulations! What kind of feature did you ship?',
        author: {
          name: 'Mike Chen',
          username: 'mike_dev'
        },
        createdAt: new Date(Date.now() - 3600000).toISOString()
      }
    ]
  },
  {
    id: '2',
    content: 'Beautiful sunset today! Sometimes you need to step away from the screen and appreciate nature. 🌅',
    author: {
      name: 'Khushboo',
      username: 'Khushboo_quotes',
      avatar: 'https://img.freepik.com/premium-photo/headshot-photos-indian-women-dynamic-professions-occassions-indian-girl_978786-295.jpg?w=2000'
    },
    createdAt: new Date(Date.now() - 7200000).toISOString(),
    likes: 156,
    retweets: 23,
    replyCount: 12,
    liked: true,
    replies: []
  },
  {
    id: '3',
    content: 'Reading "The Pragmatic Programmer" again. Every time I read it, I discover something new. Highly recommend it to anyone in tech!',
    author: {
      name: 'gaytri',
      username: 'gaytri_reads',
      avatar: 'https://img.freepik.com/premium-photo/profile-photo-charming-look-indian-beautiful-girl_1000823-87896.jpg'
    },
    createdAt: new Date(Date.now() - 14400000).toISOString(),
    likes: 89,
    retweets: 34,
    replyCount: 8,
    liked: false,
    replies: [
      {
        id: 'r2',
        content: 'Great book! I also recommend "Clean Code" by Robert C. Martin.',
        author: {
          name: 'David Kim',
          username: 'david_clean'
        },
        createdAt: new Date(Date.now() - 10800000).toISOString()
      }
    ]
  },
  {
    id: '4',
    content: 'Just finished a 10km run! Training for my first half marathon. The journey of a thousand miles begins with a single step. 🏃‍♂️',
    author: {
      name: 'Aniket Singh',
      username: 'aniket_runs',
      avatar: 'https://png.pngtree.com/png-vector/20240205/ourmid/pngtree-young-indian-man-png-image_11622291.png'
    },
    createdAt: new Date(Date.now() - 21600000).toISOString(),
    likes: 67,
    retweets: 12,
    replyCount: 15,
    liked: false,
    replies: []
  },
  {
    id: '5',
    content: 'Working on a new React project with TypeScript. The developer experience is amazing! Type safety makes such a difference in large applications.',
    author: {
      name: 'Mehak',
      username: 'mehak_react',
      avatar: "https://img.freepik.com/premium-photo/young-smart-indian-businesswoman-smiling-face-standing-blur-background-creative-colorful-office-interior-design-generative-ai-aig20_31965-142318.jpg"
    },
    createdAt: new Date(Date.now() - 28800000).toISOString(),
    likes: 201,
    retweets: 78,
    replyCount: 34,
    liked: true,
    replies: [
      {
        id: 'r3',
        content: 'TypeScript is a game changer! Once you go TypeScript, you never go back.',
        author: {
          name: 'John Smith',
          username: 'john_ts'
        },
        createdAt: new Date(Date.now() - 25200000).toISOString()
      },
      {
        id: 'r4',
        content: 'Totally agree! The refactoring experience is so much better with TypeScript.',
        author: {
          name: 'Anna Lopez',
          username: 'anna_codes'
        },
        createdAt: new Date(Date.now() - 21600000).toISOString()
      }
    ]
  }
];