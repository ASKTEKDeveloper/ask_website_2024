SELECT
    ROW_NUMBER() OVER(
        ORDER BY
            cr.ReviewID DESC
    ) AS SNo,
    cr.ReviewID,
    c.CaseStudyId,
    cr.CompanyName,
    cr.LogoFileName,
    cr.UserName,
    cr.Designation,
    cr.Review,
    cr.URL,
    cr.ActiveStatus,
    cr.CreatedDate,
    cr.ModifyedDate,
    cr.CreatedBy,
    cr.ModifyedBy
FROM
    Tbl_client_reviews cr
left join  Tbl_Case_Study c on c.ReviewId=cr.ReviewID
ORDER BY
    cr.ReviewID DESC;