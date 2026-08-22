SELECT
    ROW_NUMBER() OVER(
        ORDER BY
            b.BlogID DESC
    ) AS SNo,
    b.BlogID,
    b.BlogTitle,
    b.Category,
    b.BlogFileName,
    b.BlogDescription,
    b.Summary,
    b.ActiveStatus,
    b.CreatedDate,
    b.ModifyedDate,
    b.CreatedBy,
    b.ModifyedBy
FROM
    Tbl_Blogs b
WHERE
    BlogID = @BlogID;
