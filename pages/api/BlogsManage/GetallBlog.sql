SELECT
    ROW_NUMBER() OVER(
        ORDER BY
            b.BlogID DESC
    ) AS SNo,
    b.BlogID,
    b.ProductID,
    pm.ProductName,
    pm.ShortCode,
    b.BlogTitle,
    b.Category,
    b.BlogFileName,
    b.BlogDescription,
    b.Summary,
    b.ActiveStatus,
    b.IsScheduled,
    b.ScheduledDateTime,
    b.CreatedDate,
    b.ModifyedDate,
    b.CreatedBy,
    b.ModifyedBy
FROM
    Tbl_Blogs b
LEFT JOIN Tbl_ProductMaster pm ON pm.ProductID = b.ProductID
WHERE
    b.ActiveStatus = 'Y'
    AND (
        b.IsScheduled <> 'Y'
        OR b.ScheduledDateTime IS NULL
        OR DATEADD(MINUTE, 330, b.ScheduledDateTime) <= GETDATE()
    )
ORDER BY
    b.BlogID DESC