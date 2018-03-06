SQLStart selectAllBlogs
SELECT *
FROM (SELECT
        a.id      AS author_id,
        a.name    AS author_name,
        b.id      AS blog_id,
        b.title   AS blog_title,
        b.content AS blog_content
      FROM author AS a LEFT JOIN blog AS b ON a.id = b.aid
     ) AS t1 LEFT JOIN (SELECT
                          a.id      AS comment_author_id,
                          a.name    AS comment_author_name,
                          c.id      AS comment_id,
                          c.content AS comment_content,
                          c.bid     AS blog_id
                        FROM author AS a LEFT JOIN COMMENT AS c ON a.id = c.aid
                       ) AS t2 ON t1.blog_id = t2.blog_id;
SQLEND

SQLStart getRoomPlayer
SELECT
  u.id       AS user_id,
  u.name     AS user_name,
  u.gender   AS user_gender,
  u.age      AS user_age,
  u.location AS user_location,
  u.addr     AS user_addr,

  g.id       AS game_id,
  g.name     AS game_name,
  g.server   AS game_server,

  c.id       AS character_id,
  c.name     AS character_name,
  c.level    AS character_level
FROM `user` AS u, `game` AS g, `character` AS c, `userGame` AS ug
WHERE u.id = ug.uid AND g.id = ug.gid AND c.id = ug.cid AND ug.uid = 1 AND ug.gid = 1;
SQLEnd