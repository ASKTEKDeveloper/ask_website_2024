SELECT
    fd.DetailID,
    fd.HeaderID,
    fd.Question,
    fd.Answer,
    fh.IsActive,
    pm.ProductName,
    pm.ShortCode
FROM
    Tbl_FAQDetail fd
INNER JOIN Tbl_FAQHeader fh ON fh.HeaderID = fd.HeaderID
INNER JOIN Tbl_ProductMaster pm ON pm.ProductID = fh.ProductID
WHERE
    pm.ShortCode = @ShortCode
    AND fh.IsActive = 'Y'
ORDER BY
    fd.DetailID ASC;
