import React from 'react';
import { StylesContainerFC, markdownToHtml, stylesContainer } from '../utils';
import { TableStl, TdStl, ThStl } from './Table.styled';
import type { TableProps } from './types';

const Table: StylesContainerFC<TableProps> = ({ table, colors }) => {
	return (
		<TableStl colors={colors} captionSide={table.captionSide || 'top'}>
			<table>
				<caption>{table.caption}</caption>

				<thead>
					{table.thead.map((row, index) => (
						<tr key={index}>
							{row.map((cell, index) => (
								<ThStl
									key={index}
									colSpan={cell.colSpan}
									rowSpan={cell.rowSpan}
									keyColor={colors[cell?.keyColor || 'primary'].alternative}
								>
									{cell.label}
								</ThStl>
							))}
						</tr>
					))}
				</thead>

				<tbody>
					{table.tbody.map((row, index) => (
						<tr key={index}>
							{row.map((cell, index) => (
								<TdStl
									key={index}
									colSpan={cell.colSpan}
									rowSpan={cell.rowSpan}
									keyColor={colors[cell?.keyColor || 'primary'].light}
								>
									<div
										className='markdown'
										dangerouslySetInnerHTML={{
											__html: markdownToHtml(cell.label),
										}}
									/>
								</TdStl>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</TableStl>
	);
};

export default stylesContainer(Table);
