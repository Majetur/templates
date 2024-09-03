const Columnas = [
    {
        header: '',
        accessorKey: 'imageLink',
        cell: ({ row }) => (
            <img alt="profile" src={row.original.imageLink} className="mx-auto object-cover rounded-full h-20 w-20 " />
        )
    },
    {
        header: 'Persona',
        accessorKey: 'persona',
        cell: ({ row }) => (
            <a href={row.original.personaLink} target="_blank">{row.original.persona}</a>
        )
    },
    {
        header: 'Consejeria',
        accessorKey: 'consejeria',
        cell: ({ row }) => (
            <a href={row.original.consejeriaLink} target="_blank">{row.original.consejeria}</a>
        )
    },

];

export const mockUseListConsejoDeGobiernoVacio = {
    loading: false,
    cabecera: { title: 'Consejo de Gobierno' },
    ColumnasConsejoGobierno: Columnas,
    items: {
        data: []
    },
}

export const mockUseListConsejoDeGobierno = {
    loading: false,
    cabecera: { title: 'Consejo de Gobierno' },
    ColumnasConsejoGobierno: Columnas,
    items: [
        {
            "consejeria": "Presidencia",
            "consejeriaLink": "https://www.juntaex.es/lajunta/presidencia",
            "persona": "María Guardiola Martín",
            "personaLink": "https://www.juntaex.es/lajunta/presidencia/presidenta",
            "imageLink": "https://www.juntaex.es/documents/77055/110425/Presidenta+-+Mar%C3%ADa+Guardiola+Mart%C3%ADn3.png"
        },
        {
            "consejeria": "Consejería de Presidencia, Interior y Diálogo Social",
            "consejeriaLink": "https://www.juntaex.es/lajunta/consejeria-de-presidencia-interior-y-dialogo-social",
            "persona": "Abel Bautista Morán",
            "personaLink": "https://www.juntaex.es/lajunta/consejeria-de-presidencia-interior-y-dialogo-social/consejero",
            "imageLink": "https://www.juntaex.es/documents/77055/110425/Consejero+de+Presidencia%2C+Interior+y+Di%C3%A1logo+Social+-+Abel+Bautista+Mor%C3%A1n3.png"
        },
    ]
}

