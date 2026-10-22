-- EJERCICIO 5: crear una consulta sql que identifique los libros
-- que la alumna sonia tiene prestados, que no ha devuelto y cuyo prestamo esta vencido al dia
-- 30/07/2021


SELECT a.Nombres, a.Apellidos, l.Nombre AS Nombre_Libro, l.Editorial, p.Fecha_Prestamo
FROM
    PRESTAMO p
    JOIN ALUMNO a ON p.Id_alumno = a.id
    JOIN LIBRO l ON p.Id_libro = l.Id
WHERE
    LOWER(a.Nombres) = 'sonia'
    AND p.Entregado = false
    AND DATE_ADD(
        p.Fecha_prestam,
        INTERVAL l.Dias_limite_prestam DAY
    ) < '2021-07-30';