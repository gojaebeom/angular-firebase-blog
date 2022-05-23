import { Router } from 'express';
import * as fs from 'fs';
import * as matter from 'gray-matter';

const router = Router();
const POST_DIR = 'src/posts';

router.get('/', async (req, res) => {
  console.debug('invite posts');
  const detailDirs = fs.readdirSync(POST_DIR, 'utf-8');

  const categories = [];
  for (let dir of detailDirs) {
    const posts = fs.readdirSync(`${POST_DIR}/${dir}`, 'utf-8');
    categories.push({
      name: dir,
      posts,
    });
  }

  const totalPosts = [];
  for (let category of categories) {
    for (let post of category.posts) {
      const FILE_PATH = `${POST_DIR}/${category.name}/${post}`;
      const file = fs.readFileSync(FILE_PATH, 'utf-8');
      const { data } = matter(file);

      totalPosts.push({
        slug: post.split('.')[0],
        title: data.title,
        excerpt: data.excerpt,
        coverThumbnail: data.coverThumbnail,
        createdAt: data.createdAt,
        category: category.name,
      });
    }
  }
  return res.json({ message: 'ok', data: totalPosts });
});

router.get('/:category/:slug', async (req, res) => {
  console.debug('invite post detail');
  const { category, slug } = req.params;
  console.debug(category, slug);

  const filesInCategory = fs.readdirSync(`${POST_DIR}/${category}`, 'utf-8');
  const selectFile = filesInCategory.filter(
    (file) => file.split('.')[0] === slug
  )[0];

  if (!selectFile)
    return res.json({ message: 'slug is not defined', data: null });

  const file = fs.readFileSync(
    `${POST_DIR}/${category}/${selectFile}`,
    'utf-8'
  );
  const { data, content } = matter(file);
  return res.json({
    message: 'ok',
    data: {
      title: data.title,
      createdAt: data.createdAt,
      cover: data.cover,
      category,
      content,
    },
  });
});

export default router;
