import { Router } from "express";
import { ref, listAll, getDownloadURL, ListResult } from "firebase/storage";
import { storage } from "../utils/firebase";

const router = Router();

/**
 * @TEST
 * 파이어베이스 스토리지 사용 결과 파일리스트를 가져오는 시간이 너무 오래걸림
 * 사용 X
 */
router.get("", async (req, res) => {
  console.debug("api test");

  const listRef = ref(storage, "java");

  const { items }: ListResult = await listAll(listRef).catch((err) => {
    throw new Error(err);
  });

  for (let item of items) {
    const url: string = await getDownloadURL(ref(storage, item.fullPath)).catch(
      (err) => {
        throw new Error(err);
      }
    );
    console.debug(url);
  }

  res.json({});
});

export default router;
