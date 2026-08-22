SELECT
    cr.partnerId,
    cr.name,
    cr.logoName
FROM
    TblOurPartners cr
Where 
    cr.active='Y'
ORDER BY
    cr.partnerId DESC