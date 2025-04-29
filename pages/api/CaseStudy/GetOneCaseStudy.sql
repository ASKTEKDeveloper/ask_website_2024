SELECT
    b.CaseStudyId,
    b.CaseStudyTitle,
    b.Category,
    b.CaseStudyFileName,
    b.CaseStudyDescription,
    b.ReviewId,
    cr.CompanyName,
    cr.LogoFileName,
    b.Summary,
    b.URL,
    b.CreatedDate,
    b.ModifyedDate,
    b.CreatedBy,
    b.ModifyedBy
FROM
    Tbl_Case_Study b 
left join Tbl_client_reviews cr on cr.ReviewId=b.ReviewId
WHERE b.ActiveStatus='Y' 
ORDER BY
    b.CaseStudyId DESC;