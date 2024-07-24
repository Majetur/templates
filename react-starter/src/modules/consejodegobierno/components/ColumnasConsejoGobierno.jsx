export const ColumnasConsejoGobierno = [
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