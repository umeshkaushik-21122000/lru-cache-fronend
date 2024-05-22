import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"



 function Customtable(tableData:any) {
  return (
    <Table className="text-white">
      <TableHeader>
        <TableRow>
          <TableHead>Key</TableHead>
          <TableHead>Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.tableData.map((soketData:any) => (
          <TableRow className="text-white" key={soketData.key}>
            <TableCell>{soketData.key}</TableCell>
            <TableCell>{soketData.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
      </TableFooter>
    </Table>
  )
}

export default Customtable;