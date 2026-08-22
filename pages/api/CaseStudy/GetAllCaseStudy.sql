SELECT
    ROW_NUMBER() OVER(
        ORDER BY
            b.CaseStudyId DESC
    ) AS SNo,
    b.CaseStudyId,
    b.CaseStudyTitle,
    b.Category,
    b.CaseStudyFileName
FROM
    Tbl_Case_Study b 
left join Tbl_client_reviews cr on cr.ReviewId=b.ReviewId
WHERE b.ActiveStatus='Y'
ORDER BY
    b.CaseStudyId DESC;